# 🚗 RideAlong

A full-stack, real-time ride-hailing web application built with React, Node.js, Socket.io, and MongoDB. RideAlong connects riders with nearby captains (drivers), tracks live locations, and manages the complete ride lifecycle — from booking to payment.

---

## 📸 Screenshots

> Start the app and explore the user and captain flows.

---

## ✨ Features

### 👤 User Side
- Register & log in securely with JWT authentication
- Enter pickup & destination with live Google Maps autocomplete suggestions
- Choose from multiple vehicle types (Car, Moto, Auto) with live fare estimates
- Real-time ride matching with a nearby captain
- Live map tracking of the captain's location during the ride
- OTP-based ride verification for security
- View ride details (fare, destination, captain info) in real time

### 🧑‍✈️ Captain (Driver) Side
- Register with vehicle details & log in
- Receive new ride requests in real time
- Accept or ignore incoming ride requests
- Confirm ride with passenger's OTP
- Live location broadcasting to the server every 10 seconds
- Complete ride and navigate back to the home dashboard

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Router v6 | Client-side routing |
| GSAP + @gsap/react | Smooth panel animations |
| Socket.io Client | Real-time communication |
| Axios | HTTP requests |
| Google Maps API | Live map & location search |
| Remix Icons | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| Socket.io | Real-time bidirectional events |
| JWT | Authentication tokens |
| bcrypt | Password hashing |
| express-validator | Input validation |
| dotenv | Environment variable management |
| cookie-parser | Cookie handling |
| cors | Cross-origin requests |

---

## 📁 Project Structure

```
RideAlong/
├── Backend/
│   ├── controllers/       # Route handler logic
│   ├── db/                # MongoDB connection
│   ├── middlewares/       # Auth middleware
│   ├── models/            # Mongoose schemas (User, Captain, Ride)
│   ├── routes/            # Express route definitions
│   ├── services/          # Business logic layer
│   ├── socket.js          # Socket.io event handlers
│   ├── app.js             # Express app setup
│   └── server.js          # Server entry point
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/        # Logo and static assets
│       ├── components/    # Reusable UI components
│       │   ├── ConfirmRide.jsx
│       │   ├── ConfirmRidePopUp.jsx
│       │   ├── CaptainDetails.jsx
│       │   ├── FinishRide.jsx
│       │   ├── LiveTracking.jsx
│       │   ├── LocationSearchPanel.jsx
│       │   ├── LookingForDriver.jsx
│       │   ├── RidePopUp.jsx
│       │   ├── VehiclePanel.jsx
│       │   └── WaitingForDriver.jsx
│       ├── context/       # React context providers
│       ├── pages/         # Route-level page components
│       │   ├── Start.jsx
│       │   ├── Home.jsx
│       │   ├── Riding.jsx
│       │   ├── UserLogin.jsx
│       │   ├── UserSignup.jsx
│       │   ├── CaptainHome.jsx
│       │   ├── CaptainRiding.jsx
│       │   ├── Captainlogin.jsx
│       │   └── CaptainSignup.jsx
│       ├── App.jsx
│       └── main.jsx
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Google Maps API Key (with Maps JavaScript API & Places API enabled)

---

### 1. Clone the Repository

```bash
git clone https://github.com/adityamishra30/RideAlong.git
cd RideAlong
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Start the backend server:

```bash
node server.js
```

The server runs at `http://localhost:3000`.

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BASE_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Start the frontend dev server:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

---

## 🔌 API Endpoints

### Users
| Method | Route | Description |
|---|---|---|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | User login |
| GET | `/users/logout` | User logout |
| GET | `/users/profile` | Get user profile |

### Captains
| Method | Route | Description |
|---|---|---|
| POST | `/captains/register` | Register a new captain |
| POST | `/captains/login` | Captain login |
| GET | `/captains/logout` | Captain logout |
| GET | `/captains/profile` | Get captain profile |

### Rides
| Method | Route | Description |
|---|---|---|
| POST | `/rides/create` | Create a ride request |
| GET | `/rides/get-fare` | Get fare estimate |
| POST | `/rides/confirm` | Captain confirms ride |
| GET | `/rides/start-ride` | Start ride (OTP verified) |
| POST | `/rides/end-ride` | End the ride |

### Maps
| Method | Route | Description |
|---|---|---|
| GET | `/maps/get-coordinates` | Get lat/lng from address |
| GET | `/maps/get-distance-time` | Get distance & ETA |
| GET | `/maps/get-suggestions` | Location autocomplete |

---

## 🔄 Real-Time Socket Events

| Event | Direction | Description |
|---|---|---|
| `join` | Client → Server | User/Captain joins their room |
| `update-location-captain` | Client → Server | Captain broadcasts location |
| `new-ride` | Server → Captain | New ride request notification |
| `ride-confirmed` | Server → User | Captain accepted the ride |
| `ride-started` | Server → User | Ride has begun |
| `ride-ended` | Server → User | Ride is complete |

---

## 🔐 Environment Variables Reference

| Variable | Location | Description |
|---|---|---|
| `PORT` | Backend | Port for the Express server |
| `MONGO_URI` | Backend | MongoDB connection string |
| `JWT_SECRET` | Backend | Secret key for JWT signing |
| `GOOGLE_MAPS_API_KEY` | Backend | Server-side Maps API key |
| `VITE_BASE_URL` | Frontend | Backend API base URL |
| `VITE_GOOGLE_MAPS_API_KEY` | Frontend | Client-side Maps API key |

---

## 🚀 Deployment

- **Frontend**: Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set `VITE_BASE_URL` to your deployed backend URL.
- **Backend**: Deploy to [Render](https://render.com), [Railway](https://railway.app), or any Node.js host. Set all backend environment variables in the platform dashboard.

---

## 👨‍💻 Author

**Aditya Mishra**  
GitHub: [@adityamishra30](https://github.com/adityamishra30)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
