// Mock car service for demo/testing purposes using localStorage

// Key used to store/retrieve car data in localStorage
const CARS_KEY = 'rentwheels_cars';

// ----------- Initialize Cars with Demo Data (Runs Once) -----------
const initializeCars = () => {
  const existingCars = localStorage.getItem(CARS_KEY);

  // If cars are not already present in localStorage
  if (!existingCars) {
    const demoCars = [
      {
        id: 1,
        name: 'Toyota Camry',
        brand: 'Toyota',
        category: 'Sedan',
        price: 45,
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'GPS', 'Bluetooth', 'USB Charging'],
        available: true,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'Honda CR-V',
        brand: 'Honda',
        category: 'SUV',
        price: 65,
        image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'GPS', '4WD', 'Backup Camera'],
        available: true,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        name: 'BMW 3 Series',
        brand: 'BMW',
        category: 'Luxury',
        price: 95,
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'GPS', 'Leather Seats', 'Sunroof'],
        available: true,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      },
      {
        id: 4,
        name: 'Ford Focus',
        brand: 'Ford',
        category: 'Hatchback',
        price: 35,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'Bluetooth', 'USB Charging'],
        available: false,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      },
      {
        id: 5,
        name: 'Mercedes C-Class',
        brand: 'Mercedes',
        category: 'Luxury',
        price: 110,
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'GPS', 'Leather Seats', 'Sunroof', 'Premium Sound'],
        available: true,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      },
      {
        id: 6,
        name: 'Honda Civic',
        brand: 'Honda',
        category: 'Sedan',
        price: 40,
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['AC', 'GPS', 'Bluetooth'],
        available: true,
        vendorId: 3,
        vendorName: 'Smith Car Rentals',
        createdAt: new Date().toISOString()
      }
    ];

    // Save demo cars to localStorage as JSON string
    localStorage.setItem(CARS_KEY, JSON.stringify(demoCars));
  }
};

// Run the initializer once when the file loads
initializeCars();

// --------------------- Car Service Object ---------------------

export const carService = {

  // Get all cars from localStorage
  getAllCars: () => {
    return JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
  },

  // Get a single car by its ID
  getCarById: (id) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    return cars.find(car => car.id === id);
  },

  // Get all cars posted by a specific vendor
  getVendorCars: (vendorId) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    return cars.filter(car => car.vendorId === vendorId);
  },

  // Add a new car
  addCar: (carData) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    cars.push(carData); // Add new car to array
    localStorage.setItem(CARS_KEY, JSON.stringify(cars)); // Save updated list
  },

  // Update car info (like name, price, etc.)
  updateCar: (carId, carData) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    const carIndex = cars.findIndex(car => car.id === carId);

    if (carIndex !== -1) {
      // Replace old data with updated values
      cars[carIndex] = { ...cars[carIndex], ...carData };
      localStorage.setItem(CARS_KEY, JSON.stringify(cars));
    }
  },

  // Delete a car by its ID (FIXED: was taking `car`, should take `carId`)
  deleteCar: (carId) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    const filteredCars = cars.filter(c => c.id !== carId); // Remove that car
    localStorage.setItem(CARS_KEY, JSON.stringify(filteredCars));
  },

  // Change only the availability status (true/false)
  updateCarAvailability: (carId, available) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    const carIndex = cars.findIndex(car => car.id === carId);

    if (carIndex !== -1) {
      cars[carIndex].available = available;
      localStorage.setItem(CARS_KEY, JSON.stringify(cars));
    }
  },

  // Update car status (e.g., active, blocked, under maintenance)
  updateCarStatus: (carId, status) => {
    const cars = JSON.parse(localStorage.getItem(CARS_KEY) || '[]');
    const carIndex = cars.findIndex(car => car.id === carId);

    if (carIndex !== -1) {
      cars[carIndex].status = status;
      localStorage.setItem(CARS_KEY, JSON.stringify(cars));
    }
  }
};
