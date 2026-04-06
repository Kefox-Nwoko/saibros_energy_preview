// Vessel Details Data - Loaded from API or fallback
let vesselData = {};

// Fallback vessel data (in case API not available)
const fallbackVesselData = {
    equator: {
        id: 'equator',
        name: 'MV EQUATOR',
        type: 'Security / Crew / Survey / Workboat',
        image: 'image/equator.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Hull': 'Steel',
            'Flag': 'Nigerian',
            'Length': '15.50 m',
            'Breadth': '4.20 m',
            'Draft': '1.50 m',
            'Engine': 'Detroit (GM) 2 x 600 HP',
            'Gearbox': 'ZF Marine 2 x 230 HP',
            // --- Extra (show more) ---
            'Built': '2004',
            'Rebuilt': 'June 2024',
            'Propellers': '2 x 4-Blade Units',
            'Main Generator': 'Perkins 15 KVA',
            'Aux. Generator': '5.5 KVA Fireman',
            'Navigation': 'Echo Sounder, GPS x2, VHF Radio x2, Search Light, Compass, Navigation Light, Thuraya Satellite Phone',
            'Appliances': 'Freezer, Electric Cooker, Television, Air Conditioner 1.5HP x2',
            'Life Rafts': '2 x 16-Man Units',
            'Life Jackets': '28 Units',
            'Life Buoys': '3 Units',
            'Fire Main Pump': '1 Unit',
            'Fire Extinguishers': '4 Units',
            'Fire Detector': 'Installed',
            'Bilge Pumps': '2 Units',
            'First Aid Box': '1 Unit',
            'Fenders': 'Around entire Hull'
        },
        features: [
            'Security / Crew / Survey / Workboat',
            'Steel Hull — Built 2004, Rebuilt June 2024',
            'Detroit (GM) 2 x 600 HP Engines',
            'Thuraya Satellite Phone',
            'Air Conditioned (1.5HP x2)',
            '2 x 16-Man Life Rafts',
            '28 Life Jackets',
            'GPS x2 & VHF Radio x2'
        ],
        description: 'MV Equator is a steel-hulled multi-purpose vessel built in 2004 and fully rebuilt in June 2024. Powered by twin Detroit (GM) 600HP engines with ZF Marine gearboxes and 4-blade propellers, she is equipped for security, crew transfer, survey, and workboat operations. Navigation suite includes dual GPS, dual VHF radios, and a Thuraya satellite phone, with full safety equipment including 2 x 16-man life rafts and 28 life jackets.'
    },
    rubicon: {
        id: 'rubicon',
        name: 'MV RUBICON',
        type: 'Fast Patrol / Survey / Workboat',
        image: 'image/rubicon.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Hull': 'Aluminium',
            'Flag': 'Nigerian',
            'Length': '8.5 m',
            'Breadth': '3.3 m',
            'Draft': '0.61 m',
            'Engine': 'CAT 2 x 310 HP',
            'Drives': '2 x Hamilton Jet Drives',
            // --- Extra (show more) ---
            'Builder': 'Sea Ark Boats, USA',
            'Rebuilt': 'September 2019',
            'Tonnage': 'Under 15 Tons',
            'Gearbox': '2 x ZF Gearbox Units',
            'Navigation': 'Echo Sounder, GPS, Compass, VHF Radio, Search Lights (Bow & Stern), Navigation Light, Revolving Light, Boat Horns',
            'Appliances': 'Electric Stove, Wash-hand Stand, Table-Top Fridge',
            'Life Raft': '1 Unit (12-Man)',
            'Life Buoys': '3 Units',
            'Life Jackets': '6 Units',
            'Work Vests': '8 Units',
            'Fire Extinguishers': '3 Units',
            'Smoke Detectors': '2 Installed',
            'Bilge Pumps': '2 x 3700 GPH x 12V',
            'First Aid Box': '1 Unit',
            'Fenders': 'Round entire Hull'
        },
        features: [
            'Fast Patrol / Survey / Workboat',
            'Aluminium Hull — Sea Ark Boats USA',
            'CAT 2 x 310 HP with Hamilton Jet Drives',
            'Rebuilt September 2019',
            'Echo Sounder & GPS Navigation',
            'Search Lights Bow & Stern',
            '12-Man Life Raft',
            'Shallow Draft — 0.61m'
        ],
        description: 'MV Rubicon is an aluminium-hulled fast patrol, survey, and workboat built by Sea Ark Boats, USA and rebuilt in September 2019. Powered by twin CAT 310HP engines with ZF gearboxes and Hamilton Jet Drives, she is designed for high-speed operations in shallow waters. Equipped with full navigation, safety, and onboard appliances for extended operations.'
    },
    peacemaker: {
        id: 'peacemaker',
        name: 'MV PEACEMAKER 2',
        type: 'GRP Patrol / Crew Boat',
        image: 'image/peacemaker.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Hull': 'GRP (Glass Reinforced Plastic)',
            'Length': '12.20 m',
            'Breadth': '3.14 m',
            'Depth': '1.70 m',
            'GRT': '7.00 Tons',
            'Max Speed': '40 Knots',
            'Propulsion': 'Twin Jet Drives',
            // --- Extra (show more) ---
            'Builder': 'Bootswerft Henze Shipyard, Germany',
            'Year Built': '1987',
            'Rebuilt': '2016',
            'Passengers': '15',
        },
        features: [
            'GRP-Hulled Patrol / Crew Boat',
            'Twin Jet Drives — 40 Knots Maximum Speed',
            'Built by Bootswerft Henze, Germany',
            'Rebuilt 2016',
            '15 Passengers Capacity',
            '12.20m Length',
            'Excellent Maneuverability',
            'Shallow Water Operations'
        ],
        description: 'MV Peacemaker 2 is a GRP-hulled patrol and crew boat built by Bootswerft Henze Shipyard in Germany (1987) and rebuilt in 2016. Fitted with twin jet drives, she is capable of reaching speeds up to 40 knots, making her one of the fastest vessels in the fleet. Certified to carry 15 passengers, she excels in rapid crew transfer, patrol, and security operations.'
    },
    mercury: {
        id: 'mercury',
        name: 'MV MERCURY',
        type: 'Fast Crew / Survey / Workboat',
        image: 'image/mercury.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Hull': 'Aluminium',
            'Flag': 'Nigerian',
            'Length': '12.81 m',
            'Breadth': '3.66 m',
            'Draft': '1.22 m',
            'Engine': 'Detroit (GM) 2 x 400 HP',
            'Gearbox': 'Twin Disc MG 509 2 x 230 HP',
            // --- Extra (show more) ---
            'Builder': 'LAFCO Inc., Louisiana, USA',
            'Rebuilt': 'August 2020',
            'Propellers': '2 x 3-Blade Units',
            'Max Speed': '12 Knots',
            'Cruising Speed': '10 Knots',
            'Appliances': 'Air Conditioner 1.5HP, LG Flat Screen Smart TV, Freezer, Microwave',
            'Deck': 'Wide Deck Space with Rails and Roof Cover',
            'Navigation': 'Echo Sounder, GPS, VHF Radio, Search Light, Navigation Light, Air Conditioner 1.5HP',
            'Life Raft': '1 Unit (15-Man)',
            'Life Buoys': '3 Units',
            'Life Jackets': '15 Units',
            'Fire Extinguishers': '4 Units',
            'Fire Detector': 'Installed',
            'Bilge Pump': '1 Unit',
            'First Aid Box': '1 Unit',
            'Fenders': 'Around entire Hull'
        },
        features: [
            'Fast Crew / Survey / Workboat',
            'Aluminium Hull — LAFCO Inc., Louisiana USA',
            'Detroit (GM) 2 x 400 HP Engines',
            'Rebuilt August 2020',
            'Air Conditioned',
            'Wide Deck with Rails & Roof Cover',
            '15-Man Life Raft',
            'GPS & Echo Sounder Navigation'
        ],
        description: 'MV Mercury is an aluminium-hulled fast crew, survey, and workboat built by LAFCO Inc., Louisiana, USA and rebuilt in August 2020. Powered by twin Detroit (GM) 400HP engines with Twin Disc gearboxes and 3-blade propellers, she cruises at 10 knots with a maximum of 12 knots. Features a wide deck with rails and roof cover, air conditioning, smart TV, and full navigation and safety equipment.'
    },
    kayla: {
        id: 'kayla',
        name: 'MISS KAYLA',
        type: 'Aluminium Crewboat',
        image: 'image/kayla.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Capacity': '45 Passengers',
            'Hull': 'Aluminium',
            'Length': '34.19 m',
            'Breadth': '7.04 m',
            'Depth': '2.13 m',
            'Max Speed': '20 Knots',
            'Engine': '(4) Detroit V1271T1 — 2,100 HP',
            // --- Extra (show more) ---
            'Builder': 'Breaux Craft',
            'Year Built': '(Rebuilt) 2011',
            'Classification': 'CONARINA',
            'Gross Tonnage': '93',
            'Net Tonnage': '63',
            'Clear Deck': '250 sqm',
            'Deck Cargo': '60 Long Tons',
            'Berths / Staterooms': '14 / 6',
            'A/C & Heater': 'Yes',
            'Propellers': '48 x 48',
            'Generators': '(2) GM Detroit 4-71 — 30KW / 480V',
            'Fuel Capacity': '43,000 liters',
            'Portable Water': '25,000 liters',
            'Lube Oil': '800 liters',
            'Anchor': '150 lbs',
            'Fuel Consumption (4 Engines)': '5,087 ltrs/24hrs',
            'Fuel Consumption (Generator)': '545.04 ltrs/24hrs',
            'Radios': '(3) VHF, (1) SSB',
            'Marine Radar': 'Yes',
            'GPS Tracking': 'Yes',
            'AIS': 'Yes',
            'Echo Sounder': 'Yes',
            'Fathometer': 'Yes',
            'Autopilot': 'Yes',
            'GMDSS with Email': 'Yes',
            'Satellite Phone': 'Yes',
            'CCTV Surveillance': '360° View',
            'High Resolution Thermal Imaging': 'Yes',
            'Long Range Loud Hailer': 'Yes',
            'Public Address System': 'Yes',
            'Alarm System': 'Yes',
            'EPIRB': 'Yes',
            'Fire Hydrant Lines': 'Yes',
            'Search Light': 'Yes',
            'Marine Pumper': 'Yes'
        },
        features: ['45 Passenger Capacity', 'Aluminium Hull', 'CCTV 360° Surveillance', 'Thermal Imaging System', 'GMDSS with Email', 'GPS Tracking', 'Crew Transfer', 'Offshore Support'],
        description: 'Miss Kayla is a purpose-built aluminium crewboat constructed by Breaux Craft and rebuilt in 2011. Certified to carry 45 passengers with 14 berths across 6 staterooms, she is equipped with advanced electronics including CCTV 360° surveillance, thermal imaging, GMDSS, and GPS tracking — making her ideal for crew transfer and offshore support operations.'
    },
    lady_tasha: {
        id: 'lady_tasha',
        name: 'MV LADY TASHA',
        type: 'Supply / Crew Boat',
        image: 'image/lady_tasha.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Capacity': '11 Crew Transfer Seats, 8 Bunks',
            'Hull': 'Steel',
            'Length': '35.50 m',
            'Breadth': '8.0 m',
            'Depth': '2.73 m',
            'Max Speed': '16 Knots',
            'Engine': '4 x Detroit DD 12V77TI',
            // --- Extra (show more) ---
            'Type': 'Supply / Crew Boat',
            'Classification': 'IRS',
            'Flag': 'Nigeria',
            'Port of Registry': 'Lagos',
            'IMO Number': '8871780',
            'Official No.': 'SR 1419',
            'Call Sign': '5NOJ8',
            'Rebuilt': 'December 2022',
            'Deck Area': '27 m x 8 m',
            'Gross Tonnage': '159 T',
            'Net Tonnage': '47 T',
            'Generator Sets': '2 x Detroit 60KW',
            'Propellers': '2 x 4-Blade',
            'Cruise Speed': '12 Knots',
            'Fuel Capacity': '40 Tons',
            'Fresh Water': '30 Tons',
            'Fuel Consumption @ 12 Knots': '3 Tons',
            'Fuel Consumption @ 16 Knots': '5 Tons',
            'Charterers\' Bunks': '8',
            'Air Conditioning': 'Yes',
            'Radar': '1',
            'GPS': '1',
            'AIS': '1',
            'Echo Sounder': '1',
            'Magnetic Compass': '1',
            'VHF Radio': '2',
            'VHF DSC': '2',
            'Searchlight': '1',
            'SAT Phone': '+881631610928',
            'Email': 'ladytasha@uuplus.net',
            'EPIRB': '2',
            'SART': '1',
            'Lifebuoys': '6',
            'Life Jackets': '20',
            'Life Rafts': '1',
            'Fire Extinguishers': '9',
            'Fire Hose & Hydrant': '2',
            'Fire Blanket': '1'
        },
        features: ['Supply & Crew Boat', 'IRS Classified', '35.5m Length', 'Rebuilt December 2022', '4 x Detroit Engines', 'Air Conditioned', 'GPS & AIS Navigation', 'EPIRB Safety Equipment'],
        description: 'MV Lady Tasha is an IRS-classified Supply/Crew Boat rebuilt in December 2022, operating under the Nigerian flag out of Lagos. At 35.5 metres with a 27m x 8m deck area and 159 gross tonnes, she is powered by four Detroit DD 12V77TI engines capable of 16 knots maximum speed, and is fully equipped for crew transfer and supply operations.'
    },
    mv_facor: {
        id: 'mv_facor',
        name: 'MV FACOR',
        type: 'Supply / Crew Boat',
        image: 'image/mv_facor.webp',
        specs: {
            // --- Core 7 (always visible) ---
            'Capacity': '50 Persons Certified',
            'Hull': 'Steel',
            'Length': '33.53 m',
            'Breadth': '7.32 m',
            'Draft': '1.88 m',
            'Max Speed': '18 Knots',
            'Engine': '4 x Detroit 12V-71TL — 2,040 bhp',
            // --- Extra (show more) ---
            'Class': 'Bureau Veritas',
            'IMO Number': '8999099',
            'Call Sign': '50NL',
            'Year Rebuilt': '2014',
            'Depth Moulded': '3.23 m',
            'Gross Tonnage': '172 tons',
            'Net Tonnage': '52 tons',
            'Generators': '2 x 50KW Delco / Detroit 4-TIN (208/120V, 60Hz)',
            'Cruising Speed': '14 Knots',
            'Fuel Consumption (Max)': '55 USG/Hour',
            'Fuel Consumption (Cruise)': '40 USG/Hour',
            'Gas Oil Capacity': '40 Tons',
            'Fresh Water': '40 Tons',
            'Clear Deck Space': '11.2 x 5.48 m (37 x 18 ft)',
            'Accommodation Platform': '17 x 48 m (5.5 x 18 ft)',
            'Deck Load': '38 Tons (1.5T/sqm)',
            'Radar': '2',
            'VHF Radio': '2',
            'Magnetic Compass': '2',
            'AIS': '1',
            'Gyro': '1',
            'Autopilot': 'Yes',
            'Echo Sounder': 'Yes',
            'Navtex Receiver': 'Yes',
            'SSB / P.A. System': 'Yes',
            'FBB Mail System': 'Yes',
            'Oily Water Separator': 'Yes',
            'Sewage Plant': 'Yes',
            'Fire Pump': '1 set',
            'F.O. Pump': '1 set',
            'Hydrants': '2 each with 50\' 1.5" hose',
            'Life Rafts': '4 (SOLAS compliant)',
            'Anchor': '1 x 100KG',
            'Ballistic Gun Mount': 'Stern and Bow'
        },
        features: ['Bureau Veritas Classed', '50 Persons Certified', '18 Knots Maximum Speed', '4 x Detroit Engines', 'Ballistic Gun Mounts', 'SOLAS Safety Equipment', 'FBB Mail System', 'Oily Water Separator'],
        description: 'MV Facor is a Bureau Veritas-classed supply/crew boat rebuilt in 2014, with IMO No. 8999099. At 33.53 metres and 172 gross tonnes, she is powered by four Detroit 12V-71TL engines delivering 2,040 bhp and a maximum speed of 18 knots. Certified to carry 50 persons with full SOLAS safety equipment, ballistic gun mounts, and comprehensive navigation and communication systems.'
    },
    jetty: {
        id: 'jetty',
        name: 'Jetty & Marine Logistics Base',
        type: 'Marine Infrastructure',
        image: 'image/saibros_energy_jetty.webp',
        specs: {
            type: 'Private Jetty',
            location: '36 Eastern By-pass Road, Opposite Horlikins Event Centre, Marine Base, Port Harcourt.',
            operations: '7 days a week, 06:00 – 22:00',
            capacity: 'Multiple Vessels',
            facilities: 'Storage & Stacking',
            services: 'Full Logistics Support'
        },
        features: [
            'Materials & Equipment mobilization to and from offshore',
            'Offshore personnel transit and Crew Change operations',
            'Materials and equipment stacking facilities',
            'Creek barges materials & equipment mobilization operations',
            'Loading and delivery of fresh water'
        ],
        description: 'Saibros Energy owns and operates a fully functional jetty dedicated as an Offshore Marine Transit and Logistics Base. Our facility provides comprehensive support for offshore operations including personnel transit, equipment mobilization, and marine logistics services.'
    }
};

// Load vessels from API (optional — if missing or returns HTML error page, use embedded data)
async function loadVessels() {
    vesselData = fallbackVesselData;
    try {
        const response = await fetch('api/vessels.php');
        const text = await response.text();
        const trimmed = text.trim();
        if (!response.ok || !trimmed.startsWith('{')) {
            return false;
        }
        let result;
        try {
            result = JSON.parse(trimmed);
        } catch {
            return false;
        }
        if (result.success && result.data && Array.isArray(result.data)) {
            vesselData = {};
            result.data.forEach((vessel) => {
                vesselData[vessel.id] = vessel;
            });
            return true;
        }
    } catch {
        /* network / offline */
    }
    vesselData = fallbackVesselData;
    return false;
}

// Initialize vessels on page load
document.addEventListener('DOMContentLoaded', async function () {
    await loadVessels();
});

// Show Vessel Detail
async function showVesselDetail(vesselId) {
    // If vessel data not loaded yet, load it first
    if (Object.keys(vesselData).length === 0) {
        await loadVessels();
    }

    const vessel = vesselData[vesselId];
    if (!vessel) {
        console.error('Vessel not found:', vesselId);
        alert('Vessel data could not be loaded. Please check your connection and try again.');
        return;
    }

    // Set image
    const modalImage = document.getElementById('vesselModalImage');
    if (modalImage) {
        modalImage.src = vessel.image;
        modalImage.alt = vessel.name;
    }

    const modalTitle = document.getElementById('vesselModalTitle');
    const modalName = document.getElementById('vesselModalName');
    const modalType = document.getElementById('vesselModalType');
    const modalDesc = document.getElementById('vesselModalDesc');

    if (modalTitle) modalTitle.textContent = vessel.name;
    if (modalName) modalName.textContent = vessel.name;
    if (modalType) modalType.textContent = vessel.type;
    if (modalDesc) modalDesc.textContent = vessel.description;

    // Populate features
    const featuresContainer = document.getElementById('vesselModalFeatures');
    if (featuresContainer) {
        featuresContainer.innerHTML = '';
        vessel.features.forEach((feature) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="d-flex align-items-start gap-2 p-2 bg-light rounded-2" style="border-left: 3px solid #006b8f;">
                    <i class="bi bi-check-circle-fill text-success mt-1" style="font-size: 0.9rem;"></i>
                    <span style="color: #495057; line-height: 1.5; font-size: 0.875rem;">${feature}</span>
                </div>
            `;
            featuresContainer.appendChild(div);
        });
    }

    // Populate specifications
    const specsContainer = document.getElementById('vesselModalSpecs');
    if (specsContainer) {
        specsContainer.innerHTML = '';
        Object.entries(vessel.specs).forEach(([key, value], index, array) => {
            const div = document.createElement('div');
            const isLast = index === array.length - 1;
            div.className = isLast ? 'mb-0' : 'mb-2 pb-2';
            div.style.borderBottom = isLast ? 'none' : '1px solid #e9ecef';
            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted text-capitalize" style="font-size: 0.8rem;">${key}</span>
                    <span class="fw-semibold" style="color: #003d5c; font-size: 0.85rem;">${value}</span>
                </div>
            `;
            specsContainer.appendChild(div);
        });
    }

    // Show the modal
    const modalElement = document.getElementById('vesselModal');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

// Vessel Filter
function filterVessels(category) {
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    event.target.classList.add('active');
    event.target.setAttribute('aria-pressed', 'true');

    // Filter items
    const items = document.querySelectorAll('.vessel-item');
    let visibleCount = 0;
    items.forEach(item => {
        if (category === 'all' || item.dataset.category.includes(category)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Announce filter results to screen readers
    announceToScreenReader(`Showing ${visibleCount} vessel${visibleCount !== 1 ? 's' : ''}`);
}

// Contact Form Handler — Brevo API
function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;

    // ── Client-side validation ──────────────────────────────────────────────
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        form.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.classList.toggle('is-invalid', !input.validity.valid);
            input.classList.toggle('is-valid',   input.validity.valid);
        });
        showToast('Please fill in all required fields correctly.', 'error');
        announceToScreenReader('Form validation failed. Please check the errors and try again.');
        return;
    }

    // ── UI: loading state ───────────────────────────────────────────────────
    showLoading();
    announceToScreenReader('Sending your message...');
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    const fullName    = form.fullName.value.trim();
    const companyName = form.companyName.value.trim() || 'Not provided';
    const email       = form.email.value.trim();
    const phone       = form.phone.value.trim();
    const service     = form.service.value || 'Not specified';
    const message     = form.message.value.trim();

    const resetUI = () => {
        hideLoading();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    };

    const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
    const headers = {
        'Content-Type': 'application/json',
        'api-key': window.BREVO_API_KEY
    };

    // ── Internal notification email (to Saibros) ────────────────────────────
    const internalEmail = {
        sender: { name: window.BREVO_SENDER_NAME, email: window.BREVO_SENDER_EMAIL },
        to: [{ email: window.BREVO_NOTIFY_EMAIL, name: 'Saibros Enquiries' }],
        replyTo: { email: email, name: fullName },
        subject: `New Enquiry from ${fullName} – ${service}`,
        htmlContent: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
  <div style="background:#003d5c;padding:24px 32px;text-align:center">
    <h2 style="color:#fff;margin:0;font-family:'Arial Black',Impact,sans-serif;font-size:20px;letter-spacing:3px">SAIBROS — NEW ENQUIRY</h2>
    <p style="color:#a0c4d8;margin:6px 0 0;font-size:13px">Submitted via the website contact form</p>
  </div>
  <div style="padding:32px;background:#f9f9f9">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;width:35%;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><strong>${fullName}</strong></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Company</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222">${companyName}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Email</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><a href="mailto:${email}" style="color:#006b8f">${email}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222"><a href="tel:${phone}" style="color:#006b8f">${phone}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Service</td><td style="padding:10px 0;border-bottom:1px solid #e0e0e0;font-size:15px;color:#222">${service}</td></tr>
    </table>
    <div style="margin-top:24px">
      <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Message</p>
      <div style="background:#fff;border-left:4px solid #006b8f;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#333">${message}</div>
    </div>
    <div style="margin-top:28px;text-align:center">
      <a href="mailto:${email}" style="display:inline-block;padding:12px 28px;background:#006b8f;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:bold">Reply to ${fullName}</a>
    </div>
  </div>
  <div style="background:#003d5c;padding:16px 32px;text-align:center">
    <p style="color:#a0c4d8;font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Saibros Energy Solutions Limited. All rights reserved.</p>
  </div>
</div>`
    };

    // ── Auto-reply email (to visitor) ───────────────────────────────────────
    const autoReplyEmail = {
        sender: { name: window.BREVO_SENDER_NAME, email: window.BREVO_SENDER_EMAIL },
        to: [{ email: email, name: fullName }],
        replyTo: { email: window.BREVO_NOTIFY_EMAIL, name: window.BREVO_SENDER_NAME },
        subject: 'We received your message – Saibros Energy Solutions',
        htmlContent: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
  <div style="background:#003d5c;padding:24px 32px;text-align:center">
    <h2 style="color:#fff;margin:0;font-family:'Arial Black',Impact,sans-serif;font-size:20px;letter-spacing:3px">SAIBROS ENERGY SOLUTIONS LIMITED</h2>
  </div>
  <div style="padding:32px;background:#f9f9f9">
    <p>Dear <strong>${fullName}</strong>,</p>
    <p>Thank you for reaching out to Saibros Energy Solutions Limited.</p>
    <p>We have received your enquiry regarding <strong>${service}</strong> and a member of our team will get back to you within <strong>24 hours</strong>.</p>
    <div style="background:#fff;border-left:4px solid #006b8f;padding:16px;margin:16px 0;border-radius:4px">
      <strong>Your message:</strong><br><br>${message}
    </div>
    <p>For immediate assistance:<br>
      📞 <a href="tel:+2348109941885">+234 810 994 1885</a><br>
      ✉️ <a href="mailto:info@saibrosgroup.com">info@saibrosgroup.com</a>
    </p>
    <p>Best regards,<br>
      <strong>Saibros Energy Solutions Limited</strong><br>
      <span style="color:#888;font-size:13px">36a Circular Road, Elekahia Housing Estate, Port Harcourt, Nigeria</span>
    </p>
  </div>
  <div style="background:#003d5c;padding:16px 32px;text-align:center">
    <p style="color:#a0c4d8;font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Saibros Energy Solutions Limited. All rights reserved.</p>
  </div>
</div>`
    };

    // ── Send both emails ────────────────────────────────────────────────────
    fetch(BREVO_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(internalEmail)
    })
    .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return fetch(BREVO_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(autoReplyEmail)
        });
    })
    .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        resetUI();
        showToast('Thank you for your message! We will get back to you within 24 hours.', 'success');
        announceToScreenReader('Message sent successfully! We will get back to you within 24 hours.');
        form.reset();
        form.classList.remove('was-validated');
        form.querySelectorAll('input, textarea, select').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
    })
    .catch(err => {
        console.error('Brevo error:', err);
        resetUI();
        showToast('Failed to send message. Please try again or call us directly on +234 810 994 1885.', 'error');
        announceToScreenReader('Failed to send message. Please try again.');
    });
}

document.addEventListener('DOMContentLoaded', async function () {

    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                if (this.validity.valid) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else if (this.value !== '') {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });

            input.addEventListener('input', function () {
                if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
                    if (this.validity.valid) {
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                    } else {
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                    }
                }
            });
        });
    }

    // Scroll animations with Intersection Observer
    initScrollAnimations();

    // Initialize parallax effect
    initParallax();

    // Initialize modern lazy loading features
    initHeroLazyLoading();
    initSkeletonLoading();

    // Update copyright year
    updateCopyrightYear();
});

// Show Loading Spinner
function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.add('active');
        spinner.setAttribute('role', 'status');
        spinner.setAttribute('aria-live', 'polite');
        spinner.setAttribute('aria-label', 'Loading');
    }
}

// Hide Loading Spinner
function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.remove('active');
        spinner.removeAttribute('role');
        spinner.removeAttribute('aria-live');
        spinner.removeAttribute('aria-label');
    }
}

// Screen Reader Announcement Function
function announceToScreenReader(message) {
    // Create or get the announcement region
    let announcer = document.getElementById('sr-announcer');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'sr-announcer';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
    }

    // Clear and set new message
    announcer.textContent = '';
    setTimeout(() => {
        announcer.textContent = message;
    }, 100);
}

// Toast Notification System
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) {
        // Create container if it doesn't exist
        const newContainer = document.createElement('div');
        newContainer.id = 'toastContainer';
        newContainer.className = 'toast-container';
        document.body.appendChild(newContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;

    let icon = 'bi-info-circle-fill';
    if (type === 'success') icon = 'bi-check-circle-fill';
    if (type === 'error') icon = 'bi-exclamation-circle-fill';

    toast.innerHTML = `
        <div class="toast-icon">
            <i class="bi ${icon}"></i>
        </div>
        <div class="toast-content">
            <p class="mb-0">${message}</p>
        </div>
    `;

    const toastContainer = document.getElementById('toastContainer');
    toastContainer.appendChild(toast);

    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer utility for scroll-triggered animations
function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If user prefers reduced motion, show all elements immediately
    if (prefersReducedMotion) {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
        return;
    }

    // Create Intersection Observer with 10% threshold
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax scrolling effect for hero sections
function initParallax() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If user prefers reduced motion, don't apply parallax
    if (prefersReducedMotion) {
        return;
    }

    // Get all hero sections
    const heroSections = document.querySelectorAll('.hero-section, .hero-section-small');

    // If no hero sections found, exit
    if (heroSections.length === 0) {
        return;
    }

    // Track if hero is in viewport
    let heroInViewport = false;
    let ticking = false;

    // Intersection Observer to track when hero is in viewport
    const observerOptions = {
        threshold: 0,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            heroInViewport = entry.isIntersecting;
        });
    }, observerOptions);

    // Observe all hero sections
    heroSections.forEach(hero => {
        observer.observe(hero);
    });

    // Parallax scroll handler with requestAnimationFrame
    function updateParallax() {
        if (!heroInViewport) {
            ticking = false;
            return;
        }

        const scrollY = window.pageYOffset;

        heroSections.forEach(hero => {
            // Apply parallax to ::before pseudo-element only
            // Background moves at half the scroll speed (0.5)
            const yPos = scrollY * 0.5;
            hero.style.setProperty('--parallax-offset', `${yPos}px`);
        });

        ticking = false;
    }

    // Scroll event listener with requestAnimationFrame optimization
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Add passive event listener for better performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial call to set parallax position
    updateParallax();
}

// ===== MODERN LAZY LOADING & PROGRESSIVE LOADING =====

/**
 * Initialize hero background lazy loading with blur-up effect
 * Loads low-quality placeholder first, then high-quality image with smooth transition
 */
function initHeroLazyLoading() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get all hero sections
    const heroSections = document.querySelectorAll('.hero-section, .hero-section-small');

    if (heroSections.length === 0) return;

    // If user prefers reduced motion, load images immediately without blur effect
    if (prefersReducedMotion) {
        heroSections.forEach(hero => {
            hero.classList.add('loaded');
        });
        return;
    }

    // Intersection Observer options - load when hero is near viewport
    const observerOptions = {
        threshold: 0,
        rootMargin: '200px' // Start loading 200px before hero enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const hero = entry.target;

                // Get the high-quality image URL from CSS
                const computedStyle = window.getComputedStyle(hero, '::before');
                const backgroundImage = computedStyle.backgroundImage;

                // Extract URL from background-image property
                const urlMatch = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);

                if (urlMatch && urlMatch[1]) {
                    const imageUrl = urlMatch[1];

                    // Preload high-quality image
                    const img = new Image();

                    img.onload = () => {
                        // Image loaded successfully - remove blur effect
                        hero.classList.add('loaded');
                        observer.unobserve(hero);
                    };

                    img.onerror = () => {
                        // Image failed to load - still remove blur to show placeholder
                        hero.classList.add('loaded');
                        observer.unobserve(hero);
                    };

                    // Start loading high-quality image
                    img.src = imageUrl;
                } else {
                    // No image URL found - just remove blur
                    hero.classList.add('loaded');
                    observer.unobserve(hero);
                }
            }
        });
    }, observerOptions);

    // Observe all hero sections
    heroSections.forEach(hero => {
        observer.observe(hero);
    });
}

/**
 * Initialize skeleton loading states for cards
 * Shows skeleton screens while content loads, then smoothly transitions to actual content
 */
function initSkeletonLoading() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get all skeleton wrappers
    const skeletonWrappers = document.querySelectorAll('.skeleton-wrapper');

    if (skeletonWrappers.length === 0) return;

    // If user prefers reduced motion, show content immediately
    if (prefersReducedMotion) {
        skeletonWrappers.forEach(wrapper => {
            wrapper.classList.add('loaded');
            const content = wrapper.querySelector('.content-loading');
            if (content) {
                content.classList.add('content-loaded');
            }
        });
        return;
    }

    // Intersection Observer options - load when card is near viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before card enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const wrapper = entry.target;

                // Simulate content loading delay (remove in production or adjust based on actual data loading)
                setTimeout(() => {
                    wrapper.classList.add('loaded');
                    const content = wrapper.querySelector('.content-loading');
                    if (content) {
                        content.classList.add('content-loaded');
                    }
                    observer.unobserve(wrapper);
                }, 300); // 300ms delay for smooth UX
            }
        });
    }, observerOptions);

    // Observe all skeleton wrappers
    skeletonWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });
}

/**
 * Create low-quality placeholder data URI for blur-up effect
 * This is a tiny 10x10 pixel version of the image for instant loading
 */
function createPlaceholderDataURI() {
    // Create a small canvas for the placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');

    // Create ocean-themed gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, 10, 10);
    gradient.addColorStop(0, '#0A2463'); // Primary blue
    gradient.addColorStop(0.7, '#247BA0'); // Secondary blue
    gradient.addColorStop(1, '#06D6A0'); // Accent color

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 10, 10);

    // Return data URI
    return canvas.toDataURL('image/jpeg', 0.1);
}

/**
 * Apply low-quality placeholder to hero sections
 * This provides instant visual feedback while high-quality image loads
 */
function applyHeroPlaceholders() {
    const heroSections = document.querySelectorAll('.hero-section, .hero-section-small');
    const placeholderDataURI = createPlaceholderDataURI();

    heroSections.forEach(hero => {
        // Store original background image URL
        const computedStyle = window.getComputedStyle(hero, '::before');
        const backgroundImage = computedStyle.backgroundImage;

        // Extract URL from background-image property
        const urlMatch = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);

        if (urlMatch && urlMatch[1]) {
            const originalUrl = urlMatch[1];

            // Store original URL as data attribute for later use
            hero.dataset.bgImage = originalUrl;

            // Apply placeholder immediately via inline style
            // Note: This approach uses a CSS custom property for better performance
            hero.style.setProperty('--hero-bg-placeholder', `url(${placeholderDataURI})`);
        }
    });
}

// Dynamic copyright year
function updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}
