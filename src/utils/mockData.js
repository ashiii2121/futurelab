// Mock data for development when API is not available
export const mockData = {
  banners: [
    {
      _id: "1",
      title: "Complete Health Checkup",
      imageUrl: "images/banners/banner1.png",
      test: "health-checkup",
      category: "Health Packages"
    },
    {
      _id: "2",
      title: "Blood Test Package",
      imageUrl: "images/banners/banner2.png",
      test: "blood-test",
      category: "Blood Tests"
    },
    {
      _id: "3",
      title: "Women's Health Checkup",
      imageUrl: "images/banners/banner3.png",
      test: "women-health",
      category: "Women Care"
    },
    {
      _id: "4",
      title: "Premium Diagnostics",
      imageUrl: "images/banners/carousel-3/bann-1.png",
      test: "premium-diagnostics",
      category: "Premium Care"
    },
    {
      _id: "5",
      title: "Advanced Health Screening",
      imageUrl: "images/banners/carousel-3/bann-2.png",
      test: "advanced-screening",
      category: "Advanced Care"
    },
    {
      _id: "6",
      title: "Comprehensive Wellness",
      imageUrl: "images/banners/carousel-3/bann-3.png",
      test: "comprehensive-wellness",
      category: "Wellness"
    }
  ],

  categories: [
    {
      _id: "1",
      name: "Complete Health Checkup",
      imagePath: "images/Tests/full-body.png",
      description: "Comprehensive health screening"
    },
    {
      _id: "2",
      name: "Blood Test Package",
      imagePath: "images/test-img/test-1.png",
      description: "Complete blood analysis"
    },
    {
      _id: "3",
      name: "Diabetes Package",
      imagePath: "images/Tests/diabaties.png",
      description: "Diabetes screening tests"
    },
    {
      _id: "4",
      name: "Heart Health Package",
      imagePath: "images/Tests/heart-cardio.png",
      description: "Cardiovascular health tests"
    },
    {
      _id: "5",
      name: "Thyroid Function Tests",
      imagePath: "images/Tests/thyroid.png",
      description: "Complete thyroid screening"
    },
    {
      _id: "6",
      name: "Vitamin Deficiency Package",
      imagePath: "images/Tests/vitamin.png",
      description: "Vitamin levels analysis"
    }
  ],

  vitalOrgans: [
    {
      _id: "1",
      name: "Heart Health",
      imagePath: "images/icon-svg/organ/heart.png"
    },
    {
      _id: "2",
      name: "Kidney Function",
      imagePath: "images/icon-svg/organ/kidney.png"
    },
    {
      _id: "3",
      name: "Liver Function",
      imagePath: "images/icon-svg/organ/liver.png"
    },
    {
      _id: "4",
      name: "Blood Health",
      imagePath: "images/icon-svg/organ/blood.png"
    },
    {
      _id: "5",
      name: "Bone Health",
      imagePath: "images/icon-svg/organ/bone.png"
    },
    {
      _id: "6",
      name: "Thyroid Health",
      imagePath: "images/icon-svg/organ/thyroid.png"
    }
  ],

  womenCare: [
    {
      _id: "1",
      name: "Women's Health Checkup",
      imagePath: "images/Tests/woman.png"
    },
    {
      _id: "2",
      name: "Women's Complete Package",
      imagePath: "images/Tests/lady.png"
    },
    {
      _id: "3",
      name: "Young Women's Health",
      imagePath: "images/Tests/girl.png"
    }
  ],

  menCare: [
    {
      _id: "1",
      name: "Men's Health Checkup",
      imagePath: "images/Tests/man.png"
    },
    {
      _id: "2",
      name: "Men's Complete Package",
      imagePath: "images/Tests/gentleman.png"
    },
    {
      _id: "3",
      name: "Young Men's Health",
      imagePath: "images/Tests/guy.png"
    }
  ],

  lifestyle: [
    {
      _id: "1",
      name: "Executive Health Package",
      imagePath: "images/test-img/test-2.png"
    },
    {
      _id: "2",
      name: "Fitness Package",
      imagePath: "images/test-img/test-3.png"
    },
    {
      _id: "3",
      name: "Senior Citizen Package",
      imagePath: "images/test-img/test-4.png"
    },
    {
      _id: "4",
      name: "Child Health Package",
      imagePath: "images/Tests/child.png"
    },
    {
      _id: "5",
      name: "Teen Health Package",
      imagePath: "images/Tests/boy.png"
    },
    {
      _id: "6",
      name: "Family Health Package",
      imagePath: "images/test-img/test-5.png"
    }
  ],

  specialCare: [
    {
      _id: "1",
      name: "Premium Health Package",
      imagePath: "images/Tests/full-body.png",
      price: 2999,
      originalPrice: 4999,
      totalTests: 75,
      category: "Special Care Packages",
      description: "Comprehensive health screening with advanced diagnostics"
    },
    {
      _id: "2",
      name: "VIP Health Checkup",
      imagePath: "images/test-img/test-5.png",
      price: 4999,
      originalPrice: 7999,
      totalTests: 120,
      category: "Special Care Packages",
      description: "Complete health assessment with specialist consultation"
    },
    {
      _id: "3",
      name: "Executive Health Package",
      imagePath: "images/test-img/test-6.png",
      price: 3999,
      originalPrice: 6499,
      totalTests: 95,
      category: "Special Care Packages",
      description: "Designed for busy professionals"
    }
  ],

  singleTest: [
    {
      _id: "1",
      name: "Complete Blood Count (CBC)",
      imagePath: "images/Tests/card-1.png",
      price: 299,
      originalPrice: 499,
      category: "Single Test",
      description: "Complete blood analysis including RBC, WBC, platelets"
    },
    {
      _id: "2",
      name: "Lipid Profile",
      imagePath: "images/Tests/heart-cardio.png",
      price: 399,
      originalPrice: 599,
      category: "Single Test",
      description: "Cholesterol and triglyceride levels"
    },
    {
      _id: "3",
      name: "Thyroid Function Test",
      imagePath: "images/Tests/thyroid.png",
      price: 499,
      originalPrice: 799,
      category: "Single Test",
      description: "TSH, T3, T4 hormone levels"
    },
    {
      _id: "4",
      name: "Blood Sugar Test",
      imagePath: "images/Tests/diabaties.png",
      price: 199,
      originalPrice: 299,
      category: "Single Test",
      description: "Fasting and random glucose levels"
    },
    
    {
      _id: "5",
      name: "Liver Function Test",
      imagePath: "images/Tests/fiver.png",
      price: 549,
      originalPrice: 799,
      category: "Single Test",
      description: "Complete liver enzyme analysis"
    }
  ],

  ads: [
    {
      _id: "1",
      title: "Special Health Offer",
      imageUrl: "images/banners/sec2-banner.png"
    },
    {
      _id: "2",
      title: "Women's Health Campaign",
      imageUrl: "images/banners/sec7woman.png"
    },
    {
      _id: "3",
      title: "Men's Health Campaign",
      imageUrl: "images/banners/sec8man.png"
    }
  ]
};
