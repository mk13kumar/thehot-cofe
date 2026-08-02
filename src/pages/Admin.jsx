import { useState, useMemo } from 'react'
import { useAdmin } from '../context/adminContext.jsx'
import './Admin.css'

const Admin = () => {
  const {
    accounts = [],
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
  } = useAdmin()

  // New Category Modal State
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [newCatInput, setNewCatInput] = useState('')
  const [isNewCategoryMode, setIsNewCategoryMode] = useState(false)
  const [customCatName, setCustomCatName] = useState('')

  // Email & Password Login State
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')

  // Manage Accounts Modal / State
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)
  const [accForm, setAccForm] = useState({ name: '', email: '', password: '', role: 'Owner' })
  const [editingAccId, setEditingAccId] = useState(null)

  // Dashboard Active Tab
  const [activeTab, setActiveTab] = useState('menu') // 'overview', 'menu', 'settings'

  // Menu Search & Filter State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Modals State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItemId, setDeletingItemId] = useState(null)

  // Add/Edit Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Noodles',
    price: '',
    image: '',
  })

  // Toast Feedback State
  const [toastMessage, setToastMessage] = useState('')

  // Credentials Change State in Settings
  const [changeCredEmail, setChangeCredEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [credChangeMsg, setCredChangeMsg] = useState({ type: '', text: '' })

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Handle Email & Password Login
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setLoginError('')
    const res = login(emailInput, passwordInput)
    if (!res.success) {
      setLoginError(res.message)
    }
  }

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [menuItems, searchQuery, selectedCategory])

  // Overview Stats Calculations
  const stats = useMemo(() => {
    const total = menuItems.length
    const available = menuItems.filter((i) => i.inStock).length
    const outOfStock = total - available
    const avgPrice = Math.round(menuItems.reduce((acc, i) => acc + i.price, 0) / (total || 1))
    return { total, available, outOfStock, avgPrice }
  }, [menuItems])

  // Form Submissions
  const handleOpenAddModal = () => {
    setFormData({
      name: '',
      category: categoriesList[0] || 'Noodles',
      price: '',
      image: '',
    })
    setIsAddModalOpen(true)
  }

  const handleOpenEditModal = (item) => {
    setEditingItem(item)
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
    })
  }

  const handleImageFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      showToast('⚠️ Image file is too large! Please choose an image under 5MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const maxDim = 800
        let width = img.width
        let height = img.height

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width)
            width = maxDim
          } else {
            width = Math.round((width * maxDim) / height)
            height = maxDim
          }
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8)
        setFormData((prev) => ({ ...prev, image: compressedBase64 }))
        showToast('📸 Photo loaded successfully!')
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(file)
  }

  const handleCreateCategory = (e) => {
    e.preventDefault()
    if (!newCatInput.trim()) {
      showToast('⚠️ Category name cannot be empty!')
      return
    }
    const res = addCategory(newCatInput)
    if (res.success) {
      showToast(`📁 ${res.message}`)
      setSelectedCategory(newCatInput.trim())
      setNewCatInput('')
      setIsCategoryModalOpen(false)
    } else {
      showToast(`⚠️ ${res.message}`)
    }
  }

  const handleSaveAdd = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.price) {
      showToast('⚠️ Please enter dish name and price!')
      return
    }

    let finalCategory = formData.category
    if (isNewCategoryMode) {
      if (!customCatName.trim()) {
        showToast('⚠️ Please enter the new category name!')
        return
      }
      finalCategory = customCatName.trim()
      addCategory(finalCategory)
    }

    addMenuItem({ ...formData, category: finalCategory })
    setIsAddModalOpen(false)
    setIsNewCategoryMode(false)
    setCustomCatName('')
    showToast(`✨ New dish added to ${finalCategory} menu successfully!`)
  }

  const handleSaveEdit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.price) {
      showToast('⚠️ Please enter dish name and price!')
      return
    }

    let finalCategory = formData.category
    if (isNewCategoryMode) {
      if (!customCatName.trim()) {
        showToast('⚠️ Please enter the new category name!')
        return
      }
      finalCategory = customCatName.trim()
      addCategory(finalCategory)
    }

    updateMenuItem({
      ...editingItem,
      name: formData.name,
      category: finalCategory,
      price: Number(formData.price),
      image: formData.image || editingItem.image,
    })
    setEditingItem(null)
    setIsNewCategoryMode(false)
    setCustomCatName('')
    showToast('✅ Dish updated successfully!')
  }

  const handleDeleteConfirm = () => {
    if (deletingItemId) {
      deleteMenuItem(deletingItemId)
      setDeletingItemId(null)
      showToast('🗑️ Dish removed from menu.')
    }
  }

  const handleCredsSubmit = (e) => {
    e.preventDefault()
    setCredChangeMsg({ type: '', text: '' })
    if (!currentPassword) {
      setCredChangeMsg({ type: 'error', text: '⚠️ Please enter current password!' })
      return
    }
    const res = updateCredentials({
      newEmail: changeCredEmail || ownerEmail,
      currentPassword,
      newPassword,
    })
    if (res.success) {
      setCredChangeMsg({ type: 'success', text: res.message })
      setCurrentPassword('')
      setNewPassword('')
      setChangeCredEmail('')
    } else {
      setCredChangeMsg({ type: 'error', text: res.message })
    }
  }

  // Handle Account Form Submit (Add or Edit Account - Max 3 Allowed)
  const handleAccountSubmit = (e) => {
    e.preventDefault()
    if (editingAccId) {
      const res = updateAuthorizedAccount(editingAccId, accForm)
      if (res.success) {
        showToast(res.message)
        setIsAccountModalOpen(false)
        setEditingAccId(null)
      } else {
        showToast(res.message)
      }
    } else {
      const res = addAuthorizedAccount(accForm)
      if (res.success) {
        showToast(res.message)
        setIsAccountModalOpen(false)
      } else {
        showToast(res.message)
      }
    }
  }

  // Sign In vs Sign Up Toggle State
  const [authMode, setAuthMode] = useState('login') // 'login' | 'signup'
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' })

  // Handle Sign Up Form Submit
  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setLoginError('')

    if (!signUpData.name.trim() || !signUpData.email.trim() || !signUpData.password.trim()) {
      setLoginError('⚠️ Please fill out all fields to register.')
      return
    }

    const res = addAuthorizedAccount({
      name: signUpData.name,
      email: signUpData.email,
      password: signUpData.password,
      role: 'Owner',
    })

    if (res.success) {
      // Auto-login newly registered account & navigate authMode to login for future
      const registeredEmail = signUpData.email
      login(registeredEmail, signUpData.password)
      setEmailInput(registeredEmail)
      setPasswordInput('')
      setSignUpData({ name: '', email: '', password: '' })
      setAuthMode('login')
      showToast(`🎉 Registration successful! Welcome ${signUpData.name}.`)
    } else {
      setLoginError(res.message)
    }
  }

  // -------------------------------------------------------------
  // UNAUTHENTICATED EMAIL & PASSWORD LOGIN / SIGN UP VIEW
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card email-login-card">
          <div className="brand-badge-logo">👑 OWNER PORTAL</div>
          <h1 className="admin-login-title">
            {authMode === 'login' ? 'Management Sign In' : 'Register New Owner Account'}
          </h1>
          <p className="admin-login-subtitle">The Hot & Cold Cafe — Owner Dashboard</p>

          {/* Auth Mode Toggle Tabs (Sign In / Sign Up) */}
          <div className="auth-mode-toggle">
            <button
              type="button"
              className={`auth-toggle-btn ${authMode === 'login' ? 'active' : ''}`}
              onClick={() => {
                setAuthMode('login')
                setLoginError('')
              }}
            >
              🔑 Sign In
            </button>
            <button
              type="button"
              className={`auth-toggle-btn ${authMode === 'signup' ? 'active' : ''}`}
              onClick={() => {
                setAuthMode('signup')
                setLoginError('')
              }}
            >
              ✍️ Sign Up (Register)
            </button>
          </div>

          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="email-login-form" autoComplete="off">
              {loginError && <div className="login-error-badge">{loginError}</div>}

              <div className="login-form-group">
                <label>Authorized Email Address</label>
                <div className="input-icon-wrap">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label>Password</label>
                <div className="input-icon-wrap">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="Enter password..."
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="eye-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
              </div>

              <button type="submit" className="login-submit-btn">
                Sign In to Dashboard 🚀
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit} className="email-login-form" autoComplete="off">
              {loginError && <div className="login-error-badge">{loginError}</div>}

              <div className="login-form-group">
                <label>Your Full Name *</label>
                <div className="input-icon-wrap">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Munish"
                    value={signUpData.name}
                    onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label>Your Email Address *</label>
                <div className="input-icon-wrap">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="e.g. munish@thehotandcold.com"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label>Set Password *</label>
                <div className="input-icon-wrap">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="Set password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="eye-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
                disabled={accounts.length >= 2}
              >
                {accounts.length >= 2 ? '🔒 Max 2 Accounts Limit Reached' : 'Create Account & Sign In 🎉'}
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }

  // -------------------------------------------------------------
  // AUTHENTICATED OWNER DASHBOARD VIEW
  // -------------------------------------------------------------
  return (
    <div className="admin-dashboard-container">
      {/* Toast Notification */}
      {toastMessage && <div className="admin-toast">{toastMessage}</div>}

      {/* Owner Header Bar */}
      <div className="admin-header-ribbon">
        <div className="owner-title-block">
          <span className="crown-badge">👑 OWNER PANEL — {currentUser?.name || 'Owner'} ({currentUser?.email})</span>
          <h2>The Hot & Cold Cafe Management</h2>
        </div>

        <div className="header-status-controls">
          <div className="status-toggle-pill">
            <span className="status-label">Store Status:</span>
            <button
              className={`status-btn ${storeSettings.isOpen ? 'open' : 'closed'}`}
              onClick={() => updateSettings({ isOpen: !storeSettings.isOpen })}
            >
              {storeSettings.isOpen ? '🟢 OPEN FOR ORDERS' : '🔴 STORE CLOSED'}
            </button>
          </div>

          <button className="admin-logout-btn" onClick={logout}>
            Logout 🚪
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="admin-tabs-bar">
        <button
          className={`tab-btn ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          🍕 Manage Menu ({menuItems.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Stats & Overview
        </button>
        <button
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Store Settings & PIN
        </button>
      </div>

      {/* TAB 1: MENU MANAGER */}
      {activeTab === 'menu' && (
        <div className="tab-content-fade">
          <div className="menu-manager-toolbar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search dish by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                  ✕
                </button>
              )}
            </div>

            <div className="category-filter-scroll">
              <button
                className={`filter-chip ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All Items ({menuItems.length})
              </button>
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} ({menuItems.filter((i) => i.category === cat).length})
                </button>
              ))}
            </div>

            <div className="toolbar-action-buttons">
             
              <button className="add-dish-primary-btn" onClick={handleOpenAddModal}>
                ➕ Add New Dish
              </button>
            </div>
          </div>

          {/* Menu Table / Grid */}
          <div className="admin-menu-grid">
            {filteredItems.length === 0 ? (
              <div className="empty-menu-state">
                <p>No dishes found matching your search.</p>
                <button className="reset-filter-btn" onClick={() => setSearchQuery('')}>
                  Clear Search
                </button>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`admin-item-card ${!item.inStock ? 'out-of-stock-card' : ''}`}
                >
                  <div className="card-image-wrap">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <span className="category-tag">{item.category}</span>
                    {!item.inStock && (
                      <span className="stock-badge sold-out">OUT OF STOCK</span>
                    )}
                  </div>

                  <div className="card-body">
                    <h3 className="item-name">{item.name}</h3>

                    <div className="price-edit-row">
                      <span className="currency">₹</span>
                      <input
                        type="number"
                        className="price-input"
                        value={item.price}
                        onChange={(e) => updateItemPrice(item.id, e.target.value)}
                      />
                    </div>

                    <div className="stock-toggle-row">
                      <span>Available:</span>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={item.inStock}
                          onChange={() => {
                            toggleItemStock(item.id)
                            showToast(
                              item.inStock
                                ? `🔴 ${item.name} marked Out of Stock`
                                : `🟢 ${item.name} marked Available`
                            )
                          }}
                        />
                        <span className="toggle-slider" />
                      </label>
                    </div>

                    <div className="card-actions-row">
                      <button
                        className="action-edit-btn"
                        onClick={() => handleOpenEditModal(item)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-delete-btn"
                        onClick={() => setDeletingItemId(item.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 2: OVERVIEW & STATS */}
      {activeTab === 'overview' && (
        <div className="tab-content-fade">
          <div className="stats-cards-grid">
            <div className="stat-card gold">
              <span className="stat-icon">🍔</span>
              <div className="stat-info">
                <h3>{stats.total}</h3>
                <p>Total Menu Dishes</p>
              </div>
            </div>

            <div className="stat-card green">
              <span className="stat-icon">🟢</span>
              <div className="stat-info">
                <h3>{stats.available}</h3>
                <p>Dishes In Stock</p>
              </div>
            </div>

            <div className="stat-card red">
              <span className="stat-icon">🔴</span>
              <div className="stat-info">
                <h3>{stats.outOfStock}</h3>
                <p>Out of Stock Dishes</p>
              </div>
            </div>

            <div className="stat-card blue">
              <span className="stat-icon">🏷️</span>
              <div className="stat-info">
                <h3>₹{stats.avgPrice}</h3>
                <p>Average Dish Price</p>
              </div>
            </div>
          </div>

          <div className="quick-actions-panel">
            <h3>⚡ Quick Management Shortcuts</h3>
            <div className="shortcuts-grid">
              <button
                className="shortcut-btn"
                onClick={() => {
                  const outOfStockIds = menuItems.filter((i) => !i.inStock).map((i) => i.id)
                  outOfStockIds.forEach((id) => toggleItemStock(id))
                  showToast('🟢 All menu dishes are now In Stock!')
                }}
              >
                ✅ Mark All Items In Stock
              </button>
              <button
                className="shortcut-btn danger"
                onClick={() => {
                  if (window.confirm('Are you sure you want to reset menu to original default items?')) {
                    resetMenuToDefault()
                    showToast('🔄 Menu reset to default items!')
                  }
                }}
              >
                🔄 Reset Menu to Defaults
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: STORE SETTINGS & SECURITY */}
      {activeTab === 'settings' && (
        <div className="tab-content-fade">
          <div className="settings-cards-grid">
            {/* Store Configuration Card */}
            <div className="settings-card">
              <h3>🏪 Store Configuration</h3>

              <div className="setting-form-group">
                <label>WhatsApp Ordering Phone Number:</label>
                <input
                  type="text"
                  value={storeSettings.whatsappNumber}
                  onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                  placeholder="e.g. 916398629093"
                />
                <small>Format: Include country code without + sign (e.g. 916398629093)</small>
              </div>

              <div className="setting-form-group toggle-group">
                <div>
                  <label>Free Delivery Ribbon Banner:</label>
                  <p>Display Free 3 KM Home Delivery badge to customers</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={storeSettings.freeDeliveryActive}
                    onChange={(e) => updateSettings({ freeDeliveryActive: e.target.checked })}
                  />
                  <span className="toggle-slider" />
                </label>
              </div>
            </div>

            {/* Authorized Accounts Card (Strictly Max 2 Users) */}
            <div className="settings-card accounts-management-card">
              <div className="card-header-flex">
                <div>
                  <h3>👥 Authorized Sign-In Accounts</h3>
                  <p className="subtext">Strictly maximum 2 owners/users allowed to access dashboard</p>
                </div>
                <span className="accounts-count-pill">
                  {accounts.length} / 2 Accounts Registered
                </span>
              </div>

              <div className="accounts-list">
                {accounts.map((acc, index) => (
                  <div key={acc.id} className="account-item-row">
                    <div className="acc-info">
                      <span className="acc-role-badge">{acc.role} #{index + 1}</span>
                      <p className="acc-email">{acc.email}</p>
                      <small className="acc-name">{acc.name} (Pass: {acc.password})</small>
                    </div>
                    <div className="acc-actions">
                      <button
                        className="edit-acc-btn"
                        onClick={() => {
                          setEditingAccId(acc.id)
                          setAccForm({
                            name: acc.name,
                            email: acc.email,
                            password: acc.password,
                            role: acc.role,
                          })
                          setIsAccountModalOpen(true)
                        }}
                      >
                        ✏️ Edit
                      </button>
                      {accounts.length > 1 && (
                        <button
                          className="delete-acc-btn"
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to remove access for ${acc.email}?`)) {
                              const res = deleteAuthorizedAccount(acc.id)
                              showToast(res.message)
                            }
                          }}
                        >
                          🗑️
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {accounts.length < 2 ? (
                <button
                  className="add-acc-btn"
                  onClick={() => {
                    setEditingAccId(null)
                    setAccForm({ name: '', email: '', password: '', role: 'Owner' })
                    setIsAccountModalOpen(true)
                  }}
                >
                  ➕ Add Authorized Account (Slot {accounts.length + 1} of 2)
                </button>
              ) : (
                <div className="max-limit-badge">
                  🔒 Maximum limit reached (2/2 Accounts Registered). Edit or delete an account to change email/password.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ADD DISH MODAL */}
      {isAddModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>➕ Add New Dish to Menu</h3>
              <button className="close-modal-btn" onClick={() => setIsAddModalOpen(false)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleSaveAdd} className="modal-form">
              {/* Photo Upload / Camera Capture Section */}
              <div className="form-field photo-upload-field">
                <label>Dish Photo (Click from Phone Camera or Gallery)</label>

                {formData.image && (
                  <div className="image-preview-thumbnail">
                    <img src={formData.image} alt="Dish Preview" />
                    <button
                      type="button"
                      className="remove-img-btn"
                      onClick={() => setFormData({ ...formData, image: '' })}
                    >
                      ✕ Remove Photo
                    </button>
                  </div>
                )}

                <div className="photo-picker-buttons">
                  {/* Camera Input */}
                  <label className="photo-action-btn camera">
                    📸 Click from Camera
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>

                  {/* Phone Gallery Input */}
                  <label className="photo-action-btn gallery">
                    📁 Choose from Gallery
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>

                <div className="url-divider">or enter image web URL</div>
                <input
                  type="text"
                  placeholder="https://... (Optional image URL)"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Dish Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Special Butter Paneer Chowmein"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Category *</label>
                  <select
                    value={isNewCategoryMode ? '__ADD_NEW__' : formData.category}
                    onChange={(e) => {
                      if (e.target.value === '__ADD_NEW__') {
                        setIsNewCategoryMode(true)
                      } else {
                        setIsNewCategoryMode(false)
                        setFormData({ ...formData, category: e.target.value })
                      }
                    }}
                  >
                    {categoriesList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                    <option value="__ADD_NEW__">✨ + Create New Category...</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Price (₹) *</label>
                  <input
                    type="number"
                    required
                    min={1}
                    placeholder="e.g. 120"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>

              {isNewCategoryMode && (
                <div className="form-field new-category-input-wrap">
                  <label>📂 Enter New Category Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Desserts, Special Shakes, Thali"
                    value={customCatName}
                    onChange={(e) => setCustomCatName(e.target.value)}
                  />
                </div>
              )}

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setIsAddModalOpen(false)
                    setIsNewCategoryMode(false)
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add Dish ➕
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT DISH MODAL */}
      {editingItem && (
        <div className="modal-backdrop" onClick={() => setEditingItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✏️ Edit Dish - {editingItem.name}</h3>
              <button className="close-modal-btn" onClick={() => setEditingItem(null)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="modal-form">
              {/* Photo Upload / Camera Capture Section */}
              <div className="form-field photo-upload-field">
                <label>Dish Photo (Click from Phone Camera or Gallery)</label>

                {formData.image && (
                  <div className="image-preview-thumbnail">
                    <img src={formData.image} alt="Dish Preview" />
                    <button
                      type="button"
                      className="remove-img-btn"
                      onClick={() => setFormData({ ...formData, image: '' })}
                    >
                      ✕ Remove Photo
                    </button>
                  </div>
                )}

                <div className="photo-picker-buttons">
                  <label className="photo-action-btn camera">
                    📸 Click from Camera
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>

                  <label className="photo-action-btn gallery">
                    📁 Choose from Gallery
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>

                <div className="url-divider">or enter image web URL</div>
                <input
                  type="text"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Dish Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Category *</label>
                  <select
                    value={isNewCategoryMode ? '__ADD_NEW__' : formData.category}
                    onChange={(e) => {
                      if (e.target.value === '__ADD_NEW__') {
                        setIsNewCategoryMode(true)
                      } else {
                        setIsNewCategoryMode(false)
                        setFormData({ ...formData, category: e.target.value })
                      }
                    }}
                  >
                    {categoriesList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                    <option value="__ADD_NEW__">✨ + Create New Category...</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Price (₹) *</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>

              {isNewCategoryMode && (
                <div className="form-field new-category-input-wrap">
                  <label>📂 Enter New Category Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Desserts, Special Shakes, Thali"
                    value={customCatName}
                    onChange={(e) => setCustomCatName(e.target.value)}
                  />
                </div>
              )}

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setEditingItem(null)
                    setIsNewCategoryMode(false)
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes ✅
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE NEW CATEGORY MODAL */}
      {isCategoryModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsCategoryModalOpen(false)}>
          <div className="modal-card small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📂 Add New Menu Category</h3>
              <button className="close-modal-btn" onClick={() => setIsCategoryModalOpen(false)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateCategory} className="modal-form">
              <div className="form-field">
                <label>New Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Desserts, Thali, Ice Cream, Special Tea"
                  value={newCatInput}
                  onChange={(e) => setNewCatInput(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsCategoryModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Create Category 📁
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD / EDIT AUTHORIZED ACCOUNT MODAL */}
      {isAccountModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsAccountModalOpen(false)}>
          <div className="modal-card small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingAccId ? '✏️ Edit Authorized Account' : '➕ Add Authorized Account (Max 3)'}</h3>
              <button className="close-modal-btn" onClick={() => setIsAccountModalOpen(false)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleAccountSubmit} className="modal-form">
              <div className="form-field">
                <label>User / Owner Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Owner Personal Email"
                  value={accForm.name}
                  onChange={(e) => setAccForm({ ...accForm, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Authorized Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. mk13kumar@gmail.com"
                  value={accForm.email}
                  onChange={(e) => setAccForm({ ...accForm, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Password *</label>
                <input
                  type="text"
                  required
                  placeholder="Set password for this account"
                  value={accForm.password}
                  onChange={(e) => setAccForm({ ...accForm, password: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Role</label>
                <select
                  value={accForm.role}
                  onChange={(e) => setAccForm({ ...accForm, role: e.target.value })}
                >
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsAccountModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingAccId ? 'Save Account ✅' : 'Authorize Account 🔑'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingItemId && (
        <div className="modal-backdrop" onClick={() => setDeletingItemId(null)}>
          <div className="modal-card small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🗑️ Delete Dish?</h3>
              <button className="close-modal-btn" onClick={() => setDeletingItemId(null)}>
                ✕
              </button>
            </div>
            <p style={{ margin: '16px 0', color: '#ffd6aa' }}>
              Are you sure you want to delete this dish from the cafe menu?
            </p>
            <div className="modal-footer">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setDeletingItemId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="delete-danger-btn"
                onClick={handleDeleteConfirm}
              >
                Delete Dish 🗑️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
