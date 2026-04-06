# 100% FREE Vessel Management System
## No Time Limits • No Subscriptions • No Tricks

I've removed all Strapi files and created a **truly FREE** PHP-based admin panel with:

✅ **COMPLETELY FREE FOREVER**
- No 30-day trials
- No subscriptions
- No hidden fees
- No time limits
- No payment required EVER

✅ **What You Get:**
- Simple PHP admin panel
- Add/Edit/Delete vessels
- Upload images
- Manage vessel status
- JSON-based storage (no database needed)
- Works on any PHP hosting

---

## Quick Setup (5 Minutes)

### Option 1: Local Development (XAMPP/WAMP)

1. **Install XAMPP** (if you don't have it)
   - Download: https://www.apachefriends.org/
   - Install and start Apache

2. **Copy files to htdocs**
   ```
   Copy your entire project to:
   C:\xampp\htdocs\saibros\
   ```

3. **Access admin panel**
   ```
   http://localhost/saibros/admin/
   ```

4. **Login**
   - Username: `admin`
   - Password: `saibros2024`
   - **CHANGE THIS in admin/index.php!**

### Option 2: Any PHP Hosting

1. Upload files via FTP
2. Access: `https://yourdomain.com/admin/`
3. Login and start managing vessels

---

## Features

### Admin Dashboard
- ✅ View all vessels
- ✅ Quick stats (total, available, on charter)
- ✅ Recent vessels list
- ✅ Clean, modern interface

### Vessel Management
- ✅ Add new vessels
- ✅ Edit existing vessels
- ✅ Delete vessels
- ✅ Upload images
- ✅ Set status (Available, On Charter, Maintenance)
- ✅ Add specifications
- ✅ Add features
- ✅ Categories

### Data Storage
- ✅ JSON file-based (no database needed)
- ✅ Easy to backup
- ✅ Easy to migrate
- ✅ Human-readable

---

## File Structure

```
saibros_energy_2/
├── admin/
│   ├── index.php          # Dashboard
│   ├── vessels.php        # Vessel management
│   └── upload.php         # Image upload handler
├── data/
│   └── vessels.json       # Vessel data storage
├── image/
│   └── vessels/           # Uploaded vessel images
├── api/
│   └── vessels.php        # API endpoint for website
└── main.js                # Frontend (uses API)
```

---

## Security

### Change Default Password
Edit `admin/index.php`:
```php
define('ADMIN_USERNAME', 'your-username');
define('ADMIN_PASSWORD', 'your-secure-password');
```

### For Production
1. Use `.htaccess` to protect admin folder
2. Use HTTPS
3. Change default credentials
4. Set proper file permissions

---

## API Usage

### Get All Vessels
```
GET /api/vessels.php
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "equator",
      "name": "MV EQUATOR",
      "type": "Multi-Purpose Vessel",
      "image": "image/vessels/equator.jpg",
      "status": "available",
      "specs": {...},
      "features": [...]
    }
  ]
}
```

### Get Single Vessel
```
GET /api/vessels.php?id=equator
```

---

## Advantages Over Strapi

| Feature | This Solution | Strapi |
|---------|--------------|--------|
| Cost | **FREE Forever** | Free for 30 days? |
| Time Limit | **None** | 30 days? |
| Setup Time | 5 minutes | 30+ minutes |
| Requirements | PHP only | Node.js, npm, etc. |
| Hosting | Any PHP hosting | Node.js hosting |
| Database | Not needed | Required |
| Complexity | Simple | Complex |
| File Size | < 1MB | 100+ MB |

---

## Testing the System

### 1. Test Admin Panel
1. Go to `http://localhost/saibros/admin/`
2. Login with: admin / saibros2024
3. Add a test vessel with image
4. Save and verify it appears in the list

### 2. Test API
Open in browser:
```
http://localhost/saibros/api/vessels.php
```

You should see JSON response with all vessels.

### 3. Test Website Integration
1. Open `http://localhost/saibros/index.html`
2. Check that vessels load from API
3. Click "View Specifications" to see vessel details with images
4. Verify images display correctly in modal

---

## Complete Workflow

1. **Add Vessel in Admin**
   - Login to admin panel
   - Click "Add New Vessel"
   - Fill in all details
   - Upload vessel image
   - Click "Save Vessel"

2. **Vessel Appears on Website**
   - Website automatically fetches from API
   - Vessel appears on homepage (Featured Vessels)
   - Vessel appears on vessels.html page
   - Modal shows full details with image

3. **Edit/Delete Vessels**
   - Edit: Click "Edit" button in admin
   - Delete: Click "Delete" button (with confirmation)
   - Changes reflect immediately on website

---

## File Permissions (Linux/Mac Hosting)

If uploading to Linux server, set these permissions:
```bash
chmod 755 admin/
chmod 755 api/
chmod 777 data/
chmod 777 image/vessels/
chmod 644 data/vessels.json
```

---

## Troubleshooting

### Images not uploading?
- Check `image/vessels/` folder exists
- Check folder permissions (777 on Linux)
- Check PHP upload_max_filesize in php.ini

### API returns empty data?
- Check `data/vessels.json` exists
- Check file permissions (644 on Linux)
- Verify JSON is valid

### Can't login to admin?
- Check credentials in `admin/index.php`
- Clear browser cookies
- Try incognito/private mode

---

## Next Steps

1. ✅ Set up PHP environment (XAMPP or hosting)
2. ✅ Access admin panel at `/admin/`
3. ✅ Change default password in `admin/index.php`
4. ✅ Add your vessels with images
5. ✅ Test API at `/api/vessels.php`
6. ✅ Verify website displays vessels correctly
7. ✅ Deploy to production hosting

---

## Production Deployment

### Security Checklist
- [ ] Change admin username and password
- [ ] Use HTTPS (SSL certificate)
- [ ] Add `.htaccess` protection to admin folder
- [ ] Set proper file permissions
- [ ] Regular backups of `data/vessels.json`
- [ ] Keep PHP updated

### Backup Your Data
Simply copy `data/vessels.json` and `image/vessels/` folder regularly.

---

## Support

This is a simple, straightforward solution with:
- ✅ No vendor lock-in
- ✅ No subscriptions
- ✅ No time limits
- ✅ No tricks
- ✅ Just free, working software

**System is ready to use! Add your first vessel in the admin panel.**
