# System Architecture

## Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    SAIBROS VESSEL MANAGEMENT                 │
│                    100% FREE - NO TIME LIMITS                │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   ADMIN PANEL    │      │    API LAYER     │      │     WEBSITE      │
│   (PHP Pages)    │─────▶│  (REST API)      │◀─────│  (JavaScript)    │
└──────────────────┘      └──────────────────┘      └──────────────────┘
         │                         │                          │
         │                         │                          │
         ▼                         ▼                          ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  DATA STORAGE    │      │  IMAGE STORAGE   │      │   USER BROWSER   │
│ vessels.json     │      │  image/vessels/  │      │   (Frontend)     │
└──────────────────┘      └──────────────────┘      └──────────────────┘
```

---

## Components

### 1. Admin Panel (`admin/`)

**Files:**
- `index.php` - Dashboard & Login
- `vessels.php` - Vessel Management

**Features:**
- ✅ Login system (session-based)
- ✅ Dashboard with statistics
- ✅ Add/Edit/Delete vessels
- ✅ Image upload
- ✅ Status management
- ✅ Publish/Unpublish
- ✅ Bootstrap 5 UI

**Access:** `http://localhost/saibros/admin/`

---

### 2. API Layer (`api/`)

**Files:**
- `vessels.php` - REST API Endpoint

**Endpoints:**
```
GET /api/vessels.php
- Returns all published vessels
- Response: JSON array

GET /api/vessels.php?id=equator
- Returns single vessel by ID
- Response: JSON object
```

**Features:**
- ✅ JSON responses
- ✅ CORS enabled
- ✅ Filters unpublished vessels
- ✅ Error handling

---

### 3. Data Storage (`data/`)

**Files:**
- `vessels.json` - All vessel data

**Structure:**
```json
[
  {
    "id": "equator",
    "name": "MV EQUATOR",
    "slug": "equator",
    "type": "Multi-Purpose Vessel",
    "status": "available",
    "image": "image/EQUATOR.jpg",
    "specs": {
      "capacity": "24 Passengers",
      "hull": "Shallow-draft Steel",
      "length": "15.5 meters",
      "beam": "4.2 meters",
      "draft": "1.2 meters",
      "speed": "20 knots",
      "engine": "Twin Diesel"
    },
    "features": [...],
    "categories": [...],
    "description": "...",
    "published": true
  }
]
```

**Features:**
- ✅ JSON format (human-readable)
- ✅ No database required
- ✅ Easy to backup
- ✅ Version control friendly

---

### 4. Frontend (`main.js`)

**Functions:**
- `loadVessels()` - Fetch from API
- `showVesselDetail()` - Display modal
- `filterVessels()` - Category filtering

**Features:**
- ✅ Async data loading
- ✅ Dynamic vessel cards
- ✅ Modal with specifications
- ✅ Image display
- ✅ Category filtering
- ✅ Responsive design

---

### 5. Website Pages

**Files:**
- `index.html` - Homepage with featured vessels
- `vessels.html` - All vessels with filtering
- `about.html` - About page
- `services.html` - Services page
- `contact.html` - Contact form

**Features:**
- ✅ Multi-language support (Google Translate)
- ✅ Responsive design
- ✅ Parallax effects
- ✅ Lazy loading
- ✅ Accessibility features

---

## Data Flow

### Adding a Vessel

```
1. Admin logs in
   └─▶ admin/index.php (session check)

2. Admin clicks "Add New Vessel"
   └─▶ admin/vessels.php?action=add

3. Admin fills form and uploads image
   └─▶ POST to admin/vessels.php
       ├─▶ Saves image to image/vessels/
       └─▶ Updates data/vessels.json

4. Website loads vessels
   └─▶ main.js calls api/vessels.php
       └─▶ API reads data/vessels.json
           └─▶ Returns JSON to frontend
               └─▶ Frontend displays vessel
```

### Viewing a Vessel

```
1. User visits website
   └─▶ index.html or vessels.html

2. JavaScript loads vessels
   └─▶ fetch('api/vessels.php')
       └─▶ API returns JSON

3. User clicks "View Specifications"
   └─▶ showVesselDetail(vesselId)
       └─▶ Modal displays with image
```

---

## Security

### Authentication
- Session-based login
- Password stored in PHP constant
- Session timeout on logout

### File Upload
- Image validation
- Unique filenames (vessel ID)
- Stored in separate folder

### API
- Read-only (no POST/PUT/DELETE)
- Filters unpublished vessels
- CORS enabled for frontend

---

## Advantages

### No Database Required
- ✅ JSON file storage
- ✅ Easy to backup
- ✅ No SQL injection risk
- ✅ Portable

### Simple Architecture
- ✅ 3 PHP files
- ✅ 1 JSON file
- ✅ Standard JavaScript
- ✅ No frameworks

### Easy Deployment
- ✅ Works on any PHP host
- ✅ No server configuration
- ✅ No dependencies
- ✅ Upload and run

### Free Forever
- ✅ No subscriptions
- ✅ No time limits
- ✅ No vendor lock-in
- ✅ Open source ready

---

## Performance

### Optimizations
- ✅ Lazy loading images
- ✅ Parallax with requestAnimationFrame
- ✅ Intersection Observer for animations
- ✅ Minified CSS/JS
- ✅ Efficient JSON parsing

### Scalability
- Works well for 10-100 vessels
- For 100+ vessels, consider:
  - Pagination in API
  - Image optimization
  - Caching layer

---

## Maintenance

### Regular Tasks
- Backup `data/vessels.json`
- Backup `image/vessels/`
- Update PHP version
- Monitor disk space

### Updates
- Edit vessels via admin panel
- No code changes needed
- No database migrations

---

## Technology Stack

```
Frontend:
├── HTML5
├── CSS3 (Bootstrap 5)
├── JavaScript (ES6+)
└── Google Translate API

Backend:
├── PHP 7.4+
└── JSON file storage

Server:
├── Apache (XAMPP)
└── No database required

Libraries:
├── Bootstrap 5.3.2
├── Bootstrap Icons 1.11.1
└── Google Translate Widget
```

---

## File Size

```
Total System: < 1 MB

admin/          ~50 KB
api/            ~5 KB
data/           ~10 KB
main.js         ~20 KB
styles.css      ~15 KB
HTML pages      ~100 KB
```

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ IE11 (with polyfills)

---

## Accessibility

- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ Semantic HTML

---

## Future Enhancements (Optional)

- [ ] User roles (admin, editor, viewer)
- [ ] Vessel booking system
- [ ] Email notifications
- [ ] PDF export
- [ ] Advanced search
- [ ] Image gallery
- [ ] Maintenance logs
- [ ] Charter history

---

**Current Status: ✅ PRODUCTION READY**

All core features implemented and tested.
