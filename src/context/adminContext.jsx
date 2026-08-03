import React, { createContext, useContext, useState, useEffect } from 'react'
import { menuCategories as initialCategories, whatsappNumber as defaultWhatsapp } from '../data/appData.js'

const AdminContext = createContext()

const STORAGE_KEYS = {
  ACCOUNTS: 'hc_admin_accounts',
  AUTH: 'hc_admin_auth',
  CURRENT_USER: 'hc_admin_current_user',
  MENU: 'hc_admin_menu_items',
  SETTINGS: 'hc_admin_settings',
  CATEGORIES: 'hc_admin_categories',
}

// Initial Authorized Accounts (Strictly 2 Users Allowed to Sign Up)
const INITIAL_ACCOUNTS = [
  {
    id: 'acc_1',
    name: 'Munish (Owner 1)',
    email: 'munish@thehotandcold.com',
    password: 'munish123',
    role: 'Owner',
  },
  {
    id: 'acc_2',
    name: 'Gaurav (Owner 2)',
    email: 'gaurav@thehotandcold.com',
    password: 'gaurav123',
    role: 'Owner',
  },
]

// Flatten initial menu items with unique IDs
const getInitialMenuItems = () => {
  const items = []
  let idCounter = 1
  initialCategories.forEach((cat) => {
    cat.items.forEach((item) => {
      items.push({
        id: `item_${idCounter++}`,
        name: item.name,
        category: cat.title,
        price: item.price,
        image: item.image,
        imageSource: item.imageSource,
        inStock: true, // Default all items in stock
      })
    })
  })
  return items
}

export const AdminProvider = ({ children }) => {
  // Authorized Accounts state (Strictly 2 Accounts Allowed: Munish & Gaurav)
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACCOUNTS)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.slice(0, 2) // Enforce max 2 accounts limit
        }
      } catch (e) {
        console.error('Failed to parse saved accounts', e)
      }
    }
    return INITIAL_ACCOUNTS
  })

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse current user', e)
      }
    }
    return null
  })

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true' && currentUser !== null
  })

  // Custom categories state
  const [customCategories, setCustomCategories] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved categories', e)
      }
    }
    return []
  })

  // Menu items state with localStorage persistence
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MENU)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved menu items', e)
      }
    }
    return getInitialMenuItems()
  })

  // Store settings state
  const [storeSettings, setStoreSettings] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved settings', e)
      }
    }
    return {
      isOpen: true,
      whatsappNumber: defaultWhatsapp,
      freeDeliveryActive: true,
      freeDeliveryDistance: '3 KM',
      announcement: 'Welcome to The Hot & Cold Cafe! Order online via WhatsApp for fast delivery.',
    }
  })

  // Save accounts to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(accounts))
  }, [accounts])

  // Save customCategories to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(customCategories))
  }, [customCategories])

  // Save menuItems to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menuItems))
  }, [menuItems])

  // Save storeSettings to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(storeSettings))
  }, [storeSettings])

  // Auth methods
  const login = (email, password) => {
    const inputEmail = (email || '').trim().toLowerCase()
    const inputPass = (password || '').trim()

    const matchedAccount = accounts.find(
      (acc) => acc.email.trim().toLowerCase() === inputEmail && acc.password === inputPass
    )

    if (matchedAccount) {
      setIsAuthenticated(true)
      setCurrentUser(matchedAccount)
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true')
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(matchedAccount))
      return { success: true, user: matchedAccount }
    }

    // Check if email exists to give precise error
    const emailExists = accounts.some(
      (acc) => acc.email.trim().toLowerCase() === inputEmail
    )

    if (!emailExists) {
      return {
        success: false,
        message: '❌ Access Denied! Only authorized owner emails can sign in. This email is not registered.',
      }
    }

    return {
      success: false,
      message: '⚠️ Invalid password! Please enter the correct password for this account.',
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
    localStorage.removeItem(STORAGE_KEYS.AUTH)
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER)
  }

// Account Management Methods (Strictly Max 2 Accounts)
  const addAuthorizedAccount = ({ name, email, password, role = 'Owner' }) => {
    if (accounts.length >= 2) {
      return {
        success: false,
        message: '⚠️ Maximum limit reached! Only 2 authorized accounts can be registered.',
      }
    }

    const trimmedEmail = (email || '').trim().toLowerCase()
    if (!trimmedEmail || !password) {
      return { success: false, message: '⚠️ Please provide email and password.' }
    }

    if (accounts.some((acc) => acc.email.toLowerCase() === trimmedEmail)) {
      return { success: false, message: '⚠️ An account with this email already exists.' }
    }

    const newAcc = {
      id: `acc_${Date.now()}`,
      name: name || 'Authorized Owner',
      email: trimmedEmail,
      password: password.trim(),
      role: role || 'Owner',
    }

    setAccounts((prev) => [...prev, newAcc])
    return { success: true, message: `✅ Authorized account (${trimmedEmail}) registered successfully!` }
  }

  const updateAuthorizedAccount = (id, updatedData) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === id ? { ...acc, ...updatedData } : acc))
    )
    if (currentUser?.id === id) {
      setCurrentUser((prev) => ({ ...prev, ...updatedData }))
    }
    return { success: true, message: '✅ Account updated successfully!' }
  }

  const deleteAuthorizedAccount = (id) => {
    if (accounts.length <= 1) {
      return { success: false, message: '⚠️ You cannot delete the only remaining admin account!' }
    }
    setAccounts((prev) => prev.filter((acc) => acc.id !== id))
    if (currentUser?.id === id) {
      logout()
    }
    return { success: true, message: '🗑️ Account removed successfully.' }
  }

  // Category management
  const addCategory = (categoryName) => {
    const trimmed = categoryName.trim()
    if (!trimmed) return { success: false, message: 'Category name cannot be empty.' }
    
    if (categoriesList.some((c) => c.toLowerCase() === trimmed.toLowerCase())) {
      return { success: false, message: 'Category already exists.' }
    }

    setCustomCategories((prev) => [...prev, trimmed])
    return { success: true, message: `Category "${trimmed}" added!` }
  }

  // Menu management methods
  const toggleItemStock = (id) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, inStock: !item.inStock } : item))
    )
  }

  const updateItemPrice = (id, newPrice) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, price: Number(newPrice) } : item))
    )
  }

  const addMenuItem = (newItem) => {
    const itemToAdd = {
      id: `item_${Date.now()}`,
      name: newItem.name,
      category: newItem.category,
      price: Number(newItem.price),
      image: newItem.image || '/images/veg_noodles.jpg',
      imageSource: newItem.image || '/images/veg_noodles.jpg',
      inStock: true,
    }

    // Auto-add category if it's new
    if (!categoriesList.includes(newItem.category)) {
      setCustomCategories((prev) => [...prev, newItem.category])
    }

    setMenuItems((prev) => [itemToAdd, ...prev])
    return { success: true }
  }

  const updateMenuItem = (updatedItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? { ...item, ...updatedItem } : item))
    )
    return { success: true }
  }

  const deleteMenuItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id))
    return { success: true }
  }

  const resetMenuToDefault = () => {
    const defaults = getInitialMenuItems()
    setMenuItems(defaults)
    setCustomCategories([])
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(defaults))
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES)
  }

  const updateSettings = (newSettings) => {
    setStoreSettings((prev) => ({ ...prev, ...newSettings }))
  }

  // Categories list derived from initial list + custom categories + current menu items
  const categoriesList = Array.from(
    new Set([
      ...initialCategories.map((c) => c.title),
      ...customCategories,
      ...menuItems.map((item) => item.category),
    ])
  )

  return (
    <AdminContext.Provider
      value={{
        accounts,
        currentUser,
        isAuthenticated,
        login,
        logout,
        addAuthorizedAccount,
        updateAuthorizedAccount,
        deleteAuthorizedAccount,
        menuItems,
        categoriesList,
        addCategory,
        toggleItemStock,
        updateItemPrice,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        resetMenuToDefault,
        storeSettings,
        updateSettings,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)
