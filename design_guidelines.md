# Design Guidelines: Irish Marketplace & Jobs Platform

## Design Approach
**Reference-Based Design** inspired by Finn.no's clean, category-focused layout with green branding for the Irish market. Drawing additional patterns from eBay's marketplace trust elements and Fiverr's service listing structure.

**Core Principles:**
- Trust-first design with clear security indicators
- Scannable, information-dense layouts
- Category-driven navigation
- Irish market localization (€ currency, Irish counties/locations)

## Color Palette

**Primary Colors:**
- Irish Green (Brand): 142 76% 36% (deep emerald)
- Forest Green (Dark): 140 65% 25%
- Mint Accent: 150 60% 88% (subtle backgrounds)

**Dark Mode:**
- Background: 140 25% 8%
- Surface: 140 20% 12%
- Primary Green (adjusted): 142 65% 45%
- Text: 140 10% 92%

**Utility Colors:**
- Success: 142 76% 36% (same as brand green)
- Warning: 38 92% 50%
- Error: 0 84% 60%
- Info: 210 100% 66%

**Neutrals (Light Mode):**
- Text Primary: 140 15% 15%
- Text Secondary: 140 10% 45%
- Borders: 140 15% 88%
- Backgrounds: 0 0% 98%

## Typography

**Font Families:**
- Primary: 'Inter' (headings, UI elements, buttons)
- Secondary: 'Inter' (body text, descriptions)

**Scale:**
- Hero Headings: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base
- Captions/Meta: text-sm text-gray-600
- Buttons: text-sm md:text-base font-medium

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, and 8 consistently
- Component padding: p-4 md:p-6
- Section spacing: py-12 md:py-16
- Card gaps: gap-4 md:gap-6
- Button padding: px-6 py-2.5

**Container Strategy:**
- Max-width: max-w-7xl mx-auto
- Page padding: px-4 md:px-6 lg:px-8
- Content sections: max-w-6xl for listings/grids

**Grid Patterns:**
- Listing Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Featured Items: grid-cols-1 lg:grid-cols-2
- Category Tiles: grid-cols-2 md:grid-cols-3 lg:grid-cols-6

## Component Library

### Navigation
- **Top Nav:** Sticky header with logo, category mega-menu, search bar, and user actions
- **Search Bar:** Prominent with category dropdown, location filter, and green search button
- **Breadcrumbs:** Show navigation path with county/category context

### Listing Cards
- **Image:** 4:3 aspect ratio with hover zoom effect
- **Price Badge:** Top-right overlay with semi-transparent green background
- **Content:** Title (1-2 lines), location with pin icon, price/rate, condition badge
- **Trust Indicators:** Verified seller badge, rating stars, response time

### Trust & Security Elements
- **Payment Badge:** "Secure Payment" with shield icon in listing details
- **Escrow Notice:** Prominent banner explaining fund protection
- **Seller Rating:** Star rating + review count + "Verified" badge
- **Transaction Status:** Step indicator for order/booking progress

### Map Component (Services)
- Full-width interactive map with green pin markers
- Side panel with service provider cards
- Filter chips: Trade type, availability, rating
- Mobile: Map toggle above list view

### Job Listings
- Card-based with company logo/avatar
- Gig badge vs Full-time badge
- Location prominence (Dublin, Cork, etc.)
- "In-Person" or "Remote" tag with icons
- Green "Apply Now" CTAs

### Chat Interface
- WhatsApp-style conversation bubbles
- Seller messages: Green background (142 76% 36%)
- Buyer messages: Light gray background
- Typing indicators, read receipts
- Quick actions: "Make Offer", "Request Photos"

### Payment Flow
- Multi-step modal with progress indicator
- Shipping address form with Irish county dropdown
- Stripe card input with security badges
- Order summary with escrow explanation
- Success state with tracking number input

### Profile Dashboard
- Tabbed interface: Active Listings | Orders | Messages | Settings
- Quick stats cards: Items Listed, Sales This Month, Rating
- Action buttons: "Create Listing", "Manage Shipping"

## Images

### Hero Section
**Home Page Hero:**
- Large banner image (1920x600px) showing Irish landmarks with marketplace overlay
- Semi-transparent dark overlay (40% opacity) for text readability
- Centered search bar with white/glass-morphism background
- Descriptive text: "Ireland's Trusted Marketplace for Rentals, Sales & Services"

### Category Images
- Rental Category: High-quality camera equipment on green backdrop
- Services Category: Professional tradesperson in action shot
- Jobs Category: Collaborative workspace/team meeting
- For Sale Category: Lifestyle product arrangement

### Listing Images
- Multiple product photos in gallery format (up to 8 images)
- First image determines card thumbnail
- Service provider profile photos (professional headshots)

### Trust Elements
- Verified badge icons (green checkmark)
- Security shield illustrations
- Irish flag or shamrock for localization touches

## Animations

**Minimal, Purposeful Motion:**
- Card hover: subtle lift (scale-105) + shadow increase
- Image transitions: crossfade between gallery images
- Loading states: green spinner or skeleton screens
- Success animations: green checkmark reveal (payment confirmation)
- **Avoid:** Excessive parallax, complex scroll animations

## Mobile Considerations

- Bottom navigation for main sections (Marketplace, Jobs, Chats, Profile)
- Sticky search bar at top
- Swipeable category filters
- Map full-screen modal on mobile
- Touch-friendly 44px minimum tap targets
- Condensed listing cards (single column)

## Key Differentiators

1. **Irish Localization:** County-based filtering, € pricing, Irish bank transfer options
2. **Green Identity:** Consistent emerald green threading through CTAs, badges, and accents
3. **Security-First:** Prominent escrow messaging, verified badges, secure payment indicators
4. **Category Clarity:** Distinct visual treatment for Rentals vs Sales vs Services vs Jobs
5. **Map Integration:** Location-based service discovery central to Services section