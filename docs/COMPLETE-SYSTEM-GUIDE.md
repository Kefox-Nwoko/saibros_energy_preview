# 🚢 Saibros Vessel Management System
## 100% FREE - Complete Setup & User Guide

---

## ✅ What's Been Built

A complete vessel management system with:

1. **Admin Panel** (`admin/`)
   - Login system (username: admin, password: saibros2024)
   - Dashboard with statistics
   - Add/Edit/Delete vessels
   - Image upload
   - Status management (Available, On Charter, Maintenance)
   - Publish/Unpublish vessels

2. **API Endpoint** (`api/vessels.php`)
   - Returns vessel data in JSON format
   - Filters only published vessels
   - Supports single vessel lookup by ID

3. **Data Storage** (`data/vessels.json`)
   - JSON file-based storage (no database needed)
   - Pre-loaded with your 4 existing vessels
   - Easy to backup and migrate

4. **Frontend Integration** (`main.js`)
   - Automatically loads vessels from API
   - Dynamic vessel cards
   - Modal with full specifications and images
   - Filtering by category

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install XAMPP (if not already installed)
1. Download from: https://www.apachefriends.org/
2. Install and start Apache
3. No MySQL needed!

### Step 2: Copy Files
```
Copy your entire project folder to:
C:\xampp\htdocs\saibros\
```

### Step 3: Access Admin Panel
```
Open browser: http://localhost/saibros/admin/
Login: admin / saibros2024
```

### Step 4: Test Everything
```
1. Admin Panel: http://localhost/saibros/admin/
2. API Test: http://localhost/saibros/test-api.html
3. Website: http://localhost/saibros/index.html
```

---

## 📁 File Structure

```
saibros/
├── admin/
│   ├── index.php          # Dashboard & login
│   └── vessels.php        # Vessel management
│
├── api/
│   └── vessels.php        # API endpoint
│
├── data/
│   └── vessels.json       # Vessel data (4 vessels pre-loaded)
│
├── image/
│   ├── EQUATOR.jpg        # Existing vessel images
│   ├── RUBICON.png
│   ├── PEACEMAKER.png
│   ├── mercury.jpg
│   └── vessels/           # New uploaded images go here
│
├── main.js                # Frontend (loads from API)
├── index.html             # Homepage
├── vessels.html           # Vessels page
├── test-api.html          # API testing page
└── FREE-ADMIN-PANEL-SETUP.md
```

---

## 🎯 How to Use

### Adding a New Vessel

1. **Login to Admin**
   - Go to `http://localhost/saibros/admin/`
   - Login with admin/saibros2024

2. **Click "Add New Vessel"**

3. **Fill in Details**
   - Basic Info: Name, Type, Status
   - Upload Image (JPG, PNG)
   - Specifications: Capacity, Hull, Length, Beam, Draft, Speed, Engine
   - Features: One per line
   - Categories: Check applicable boxes
   - Description: Short and full descriptions

4. **Save**
   - Click "Save Vessel"
   - Vessel appears immediately on website

### Editing a Vessel

1. Go to admin panel
2. Click "Edit" on any vessel
3. Make changes
4. Click "Save Vessel"

### Deleting a Vessel

1. Go to admin panel
2. Click "Delete" on any vessel
3. Confirm deletion

---

## 🔧 Testing the System

### Test 1: Admin Panel
```
URL: http://localhost/saibros/admin/
Expected: Login page, then dashboard with 4 vessels
```

### Test 2: API Endpoint
```
URL: http://localhost/saibros/api/vessels.php
Expected: JSON response with vessel data
```

### Test 3: API Test Page
```
URL: http://localhost/saibros/test-api.html
Expected: Shows JSON and vessel cards with images
```

### Test 4: Website Integration
```
URL: http://localhost/saibros/index.html
Expected: Homepage loads vessels from API
Action: Click "View Specifications" on any vessel
Expected: Modal shows full details with image
```

### Test 5: Vessels Page
```
URL: http://localhost/saibros/vessels.html
Expected: All 4 vessels displayed with images
Action: Click filter buttons (Crew, Utility, etc.)
Expected: Vessels filter correctly
```

---

## 🔐 Security (IMPORTANT!)

### Change Default Password
Edit `admin/index.php` lines 10-11:
```php
define('ADMIN_USERNAME', 'your-username');
define('ADMIN_PASSWORD', 'your-secure-password');
```

### For Production Hosting
1. Use HTTPS (SSL certificate)
2. Add `.htaccess` to protect admin folder
3. Set proper file permissions (755 for folders, 644 for files)
4. Regular backups of `data/vessels.json`

---

## 📊 API Documentation

### Get All Vessels
```
GET /api/vessels.php

Response:
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": "equator",
      "name": "MV EQUATOR",
      "type": "Multi-Purpose Vessel",
      "status": "available",
      "image": "image/EQUATOR.jpg",
      "specs": {...},
      "features": [...],
      "categories": [...],
      "description": "...",
      "published": true
    }
  ]
}
```

### Get Single Vessel
```
GET /api/vessels.php?id=equator

Response:
{
  "success": true,
  "data": {
    "id": "equator",
    "name": "MV EQUATOR",
    ...
  }
}
```

---

## 💾 Backup & Restore

### Backup
Simply copy these files:
```
data/vessels.json          # All vessel data
image/vessels/             # Uploaded images
```

### Restore
Copy the files back to their locations.

---

## 🐛 Troubleshooting

### Problem: Can't access admin panel
**Solution:**
- Check XAMPP Apache is running
- Try: http://localhost/saibros/admin/index.php
- Clear browser cache

### Problem: Images not uploading
**Solution:**
- Check `image/vessels/` folder exists
- On Linux: `chmod 777 image/vessels/`
- Check PHP upload_max_filesize

### Problem: API returns empty
**Solution:**
- Check `data/vessels.json` exists
- Verify JSON is valid
- Check file permissions

### Problem: Vessels not loading on website
**Solution:**
- Open browser console (F12)
- Check for JavaScript errors
- Verify API URL is correct
- Test API directly: `/api/vessels.php`

---

## 🌐 Deploying to Production

### Option 1: Shared Hosting (Most Common)
1. Upload files via FTP
2. Access: `https://yourdomain.com/admin/`
3. Change admin password
4. Done!

### Option 2: VPS/Cloud Server
1. Install Apache + PHP
2. Upload files to `/var/www/html/`
3. Set permissions
4. Configure SSL
5. Done!

### Recommended Hosts (PHP Support)
- Hostinger
- Bluehost
- SiteGround
- DigitalOcean
- Any host with PHP 7.4+

---

## ✨ Features

### Admin Panel
- ✅ Clean, modern interface
- ✅ Responsive design
- ✅ Image preview
- ✅ Status badges
- ✅ Quick stats dashboard
- ✅ Easy vessel management

### Website Integration
- ✅ Automatic data loading from API
- ✅ Dynamic vessel cards
- ✅ Modal with full specifications
- ✅ Category filtering
- ✅ Image display in modals
- ✅ Responsive design

### Data Management
- ✅ JSON-based (no database)
- ✅ Easy to backup
- ✅ Human-readable
- ✅ Version control friendly

---

## 📝 Pre-loaded Vessels

Your system comes with 4 vessels already configured:

1. **MV EQUATOR** - Multi-Purpose Vessel
2. **MV RUBICON** - Light Utility Vessel
3. **MV PEACEMAKER 2** - Crew Transfer Vessel
4. **MV MERCURY** - Multi-Role Vessel

All with complete specifications, features, and images!

---

## 🎉 Advantages Over Strapi

| Feature | This System | Strapi |
|---------|-------------|--------|
| Cost | **FREE Forever** | Free for 30 days |
| Time Limit | **None** | 30 days trial |
| Setup Time | **5 minutes** | 30+ minutes |
| Requirements | **PHP only** | Node.js, npm, database |
| Hosting | **Any PHP host** | Node.js hosting |
| Database | **Not needed** | Required |
| Complexity | **Simple** | Complex |
| File Size | **< 1MB** | 100+ MB |
| Learning Curve | **Easy** | Steep |

---

## 🚀 You're Ready!

Your vessel management system is complete and ready to use:

1. ✅ Admin panel built
2. ✅ API endpoint created
3. ✅ Data storage configured
4. ✅ Frontend integrated
5. ✅ 4 vessels pre-loaded
6. ✅ Images working
7. ✅ Test page included

**Next Step:** Start XAMPP and access `http://localhost/saibros/admin/`

---

## 💡 Tips

- Change the admin password immediately
- Backup `data/vessels.json` regularly
- Test on localhost before deploying
- Use HTTPS in production
- Keep PHP updated

---

## 📞 Need Help?

If you encounter any issues:
1. Check the Troubleshooting section
2. Verify XAMPP is running
3. Check browser console for errors
4. Test API endpoint directly

---

**System Status: ✅ READY TO USE**

No subscriptions. No time limits. No tricks. Just free, working software.
