# 🔐 Admin Panel Access Guide

## How to Access the Backend

### Option 1: Admin Button in Navbar (NEW!)

The easiest way to access the vessel management backend:

1. **Look at the top navigation bar** on any page
2. **Find the "Admin" button** (with gear icon ⚙️)
   - Located between the language selector and "Call Now" button
   - Has a gear icon and says "Admin"
3. **Click the Admin button**
4. **Login with credentials:**
   - Username: `admin`
   - Password: `saibros2024`

```
Navbar Layout:
[Home] [About] [Services] [Vessels] [Contact] | [Language 🌐] [Admin ⚙️] [Call Now 📞]
                                                                    ↑
                                                            Click here!
```

---

### Option 2: Direct URL

You can also access the admin panel directly:

**Local (XAMPP):**
```
http://localhost/saibros/admin/
```

**Production:**
```
https://yourdomain.com/admin/
```

---

## Admin Panel Features

Once logged in, you can:

### Dashboard
- View total vessels count
- See vessels by status (Available, On Charter, Maintenance)
- Quick overview of recent vessels

### Vessel Management
- **Add New Vessel** - Click the blue "Add New Vessel" button
- **Edit Vessel** - Click "Edit" on any vessel card
- **Delete Vessel** - Click "Delete" on any vessel card
- **Upload Images** - Use the image upload field in the form

---

## Adding a New Vessel

1. Click "Admin" button in navbar (or go to `/admin/`)
2. Login with admin/saibros2024
3. Click "Add New Vessel" button
4. Fill in the form:

### Basic Information
- **Vessel Name** (required) - e.g., "MV EXPLORER"
- **Type** (required) - e.g., "Multi-Purpose Vessel"
- **Status** - Available, On Charter, or Maintenance
- **Vessel Image** - Upload JPG or PNG

### Specifications
- Capacity - e.g., "24 Passengers"
- Hull Type - e.g., "Steel"
- Length - e.g., "15.5 meters"
- Beam - e.g., "4.2 meters"
- Draft - e.g., "1.2 meters"
- Speed - e.g., "20 knots"
- Engine - e.g., "Twin Diesel"

### Categories
Check applicable boxes:
- Crew
- Utility
- Security
- Survey
- PSV
- Offshore

### Features
Enter one feature per line:
```
Crew Transfer
Utility Operations
Security Patrol
Survey Support
```

### Descriptions
- **Short Description** - Brief summary for cards
- **Full Description** - Detailed description for modal

5. Check "Published" to make it visible on website
6. Click "Save Vessel"

---

## Editing a Vessel

1. Go to Admin Panel
2. Find the vessel you want to edit
3. Click "Edit" button
4. Make your changes
5. Click "Save Vessel"

---

## Deleting a Vessel

1. Go to Admin Panel
2. Find the vessel you want to delete
3. Click "Delete" button
4. Confirm deletion

**Warning:** This action cannot be undone!

---

## Uploading Images

### Image Requirements
- **Format:** JPG or PNG
- **Recommended Size:** 1200x800 pixels
- **Max File Size:** 10MB
- **Aspect Ratio:** 3:2 (landscape)

### Upload Process
1. In the vessel form, find "Vessel Image" field
2. Click "Choose File"
3. Select your image
4. Image will be uploaded when you save the vessel

### Where Images Are Stored
```
image/vessels/
├── vessel-id-1.jpg
├── vessel-id-2.png
└── vessel-id-3.jpg
```

---

## Viewing Changes on Website

After adding or editing a vessel:

1. **Go to the website** (index.html or vessels.html)
2. **Refresh the page** (F5 or Ctrl+R)
3. **Your changes appear immediately**
   - New vessels show up in the vessel list
   - Edited vessels show updated information
   - Deleted vessels are removed

---

## Translation Feature

The language switcher in the navbar allows visitors to translate the website:

### Available Languages
- 🇬🇧 English (default)
- 🇫🇷 Français (French)
- 🇵🇹 Português (Portuguese)

### How It Works
1. Click the language dropdown (globe icon 🌐)
2. Select a language
3. Page content translates automatically
4. Language preference is saved in browser

### For Admins
- Admin panel is always in English
- Translation only affects public website pages
- Vessel data entered in admin appears in all languages

---

## Security Tips

### Change Default Password
**IMPORTANT:** Change the default password immediately!

1. Open `admin/index.php` in a text editor
2. Find lines 10-11:
```php
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'saibros2024');
```
3. Change to your secure credentials:
```php
define('ADMIN_USERNAME', 'your-username');
define('ADMIN_PASSWORD', 'your-secure-password');
```
4. Save the file

### Additional Security
- Use HTTPS in production
- Don't share admin credentials
- Logout when finished
- Regular backups of vessel data

---

## Troubleshooting

### Can't see Admin button?
- **Check:** Make sure you're on the website (not admin panel)
- **Look:** It's in the top navbar, between language selector and Call Now
- **Try:** Refresh the page (Ctrl+R or F5)

### Admin button not working?
- **Check:** XAMPP Apache is running
- **Try:** Direct URL: `http://localhost/saibros/admin/`
- **Verify:** Files are in correct location

### Can't login?
- **Check:** Username is `admin` (lowercase)
- **Check:** Password is `saibros2024`
- **Try:** Clear browser cookies
- **Try:** Incognito/private mode

### Images not uploading?
- **Check:** `image/vessels/` folder exists
- **Check:** File is JPG or PNG
- **Check:** File size under 10MB
- **Try:** Different image

### Changes not appearing on website?
- **Refresh:** Press F5 or Ctrl+R
- **Clear cache:** Ctrl+Shift+R (hard refresh)
- **Check:** Vessel is marked as "Published"
- **Verify:** API returns data: `/api/vessels.php`

---

## Quick Reference

### Admin Panel URLs
```
Local:      http://localhost/saibros/admin/
Production: https://yourdomain.com/admin/
```

### Default Credentials
```
Username: admin
Password: saibros2024
```

### Key Files
```
admin/index.php     - Dashboard
admin/vessels.php   - Vessel management
api/vessels.php     - API endpoint
data/vessels.json   - Vessel data
image/vessels/      - Uploaded images
```

### Common Tasks
```
Add Vessel:    Admin → Add New Vessel → Fill form → Save
Edit Vessel:   Admin → Edit button → Modify → Save
Delete Vessel: Admin → Delete button → Confirm
Upload Image:  In vessel form → Choose File → Save
View on Site:  Go to website → Refresh page
```

---

## Support

### Documentation
- **README.md** - Quick start
- **COMPLETE-SYSTEM-GUIDE.md** - Full guide
- **DEPLOYMENT-CHECKLIST.md** - Production deployment

### Testing
- **test-api.html** - Test API endpoint
- **Browser Console** (F12) - Debug errors

### Need Help?
1. Check this guide
2. Check COMPLETE-SYSTEM-GUIDE.md
3. Check browser console for errors
4. Verify XAMPP is running

---

## Summary

✅ **Admin Button** - Top navbar, gear icon, between language and call button  
✅ **Login** - admin / saibros2024  
✅ **Add Vessels** - Click "Add New Vessel" button  
✅ **Upload Images** - Use image field in vessel form  
✅ **View Changes** - Refresh website to see updates  
✅ **Translation** - Language dropdown works automatically  

**You're all set! Click the Admin button in the navbar to get started.**
