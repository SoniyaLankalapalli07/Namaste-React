import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/jpeg;base64,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" alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <span>{avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
        <p className="cuisine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "211192",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "lczhp9lptdzbqn09nfns",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "477963",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "2nd Stage",
      areaName: "BTM 2nd Stage",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 32,
    },
  },
  {
    info: {
      id: "23683",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "255038",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "e996wruqpmrrrqglp7hs",
      locality: "NS Palya",
      areaName: "Btm Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.3,
      parentId: "10496",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "240178",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_240178.jpg",
      locality: "Indiranagar",
      areaName: "JP Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
      parentId: "371281",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 39,
    },
  },
  {
    info: {
      id: "290271",
      name: "Thalairaj Biryani",
      cloudinaryImageId: "qf8lwn0ehi8sgvjvsi2l",
      locality: "5th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Andhra",
        "Biryani",
        "Hyderabadi",
        "South Indian",
        "Indian",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "433875",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "17312",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17312.JPG",
      locality: "4th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "49704",
      name: "California Burrito",
      cloudinaryImageId: "p57honbbzdgf7tyt2vay",
      locality: "5th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "1252",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "246645",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.2,
      parentId: "319582",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "643652",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643652.JPG",
      locality: "16TH MAIN",
      areaName: "BTM",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.4,
      parentId: "355285",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "750212",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750212.JPG",
      locality: "2nd stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "444382",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "390045",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/8dd09eab-b40e-43ed-b46d-c88f50e450a3_390045.JPG",
      locality: "2nd stage",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.6,
      parentId: "22452",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "374525",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "npp2m7tuszixwcc69pqd",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      deliveryTime: 20,
    },
  },
  {
    info: {
      id: "758321",
      name: "NIC Ice Creams",
      cloudinaryImageId: "5bbe809ee274743ba5e09eab110cd813",
      locality: "MICO Employees Grinirman",
      areaName: "BTM layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.9,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.9",
      totalRatingsString: "10+",
      deliveryTime: 16,
    },
  },
  {
    info: {
      id: "590119",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/11e95f9e-ba33-472c-85ae-ed6d5c289992_590119.JPG",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.3,
      parentId: "3818",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "399138",
      name: "Aubree",
      cloudinaryImageId: "65faa4b5046cb2215fe285a8b96c9bd7",
      locality: "JP Nagar",
      areaName: "JP Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery", "Italian", "Snacks", "Desserts"],
      avgRating: 4.5,
      parentId: "3807",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      deliveryTime: 33,
    },
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId: "yktanq9i7yfjrixaghuj",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.3,
      parentId: "21400",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 21,
    },
  },
  {
    info: {
      id: "622017",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/0fbf3dd4-03fc-403e-b861-6d7455bcb69b_622017.JPG",
      locality: "BTM Layout",
      areaName: "Btm 2nd Stage",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "558760",
      name: "HRX by EatFit",
      cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
      avgRating: 4.3,
      parentId: "335529",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search" />
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a href="" target="_blank">
        Soniya Lankalapalli
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Food <span>Express</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);