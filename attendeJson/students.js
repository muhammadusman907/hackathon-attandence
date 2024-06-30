// studentData.js

const students = [
  {
    name: "Ali Khan",
    email: "ali@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer A",
    trainer_id: "60d0fe4f5311236168a109cd1", // Example ObjectId
    phone_number: 1234567890,
    cnic_number: "1234567890123",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  },
  {
    name: "Ahmed",
    email: "ahmed@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer B",
    trainer_id: "60d0fe4f5311236168a109cd1", // Example ObjectId
    phone_number: 1234567891,
    cnic_number: "1234567890124",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Unpaid",
    attendences: []
  },
  {
    name: "John Doe",
    email: "john@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer C",
    trainer_id: "60d0fe4f5311236168a109cd1", // Example ObjectId
    phone_number: 1234567892,
    cnic_number: "1234567890125",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  },
  {
    name: "Sara Ali",
    email: "sara@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer D",
    trainer_id: "60d0fe4f5311236168a109cd1", // Example ObjectId
    phone_number: 1234567893,
    cnic_number: "1234567890126",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  },
  {
    name: "Michael Smith",
    email: "michael@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer E",
    trainer_id: "60d0fe4f5311236168a109cd2", // Example ObjectId
    phone_number: 1234567894,
    cnic_number: "1234567890127",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Unpaid",
    attendences: []
  },
  {
    name: "Linda Johnson",
    email: "linda@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer F",
    trainer_id: "60d0fe4f5311236168a109cd2", // Example ObjectId
    phone_number: 1234567895,
    cnic_number: "1234567890128",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  },
  {
    name: "Robert Brown",
    email: "robert@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer G",
    trainer_id: "60d0fe4f5311236168a109cd2", // Example ObjectId
    phone_number: 1234567896,
    cnic_number: "1234567890129",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Unpaid",
    attendences: []
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer H",
    trainer_id: "60d0fe4f5311236168a109cd3", // Example ObjectId
    phone_number: 1234567897,
    cnic_number: "1234567890130",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer I",
    trainer_id: "60d0fe4f5311236168a109cd3", // Example ObjectId
    phone_number: 1234567898,
    cnic_number: "1234567890131",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Unpaid",
    attendences: []
  },
  {
    name: "Jessica Miller",
    email: "jessica@example.com",
    courses: ["60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    trainer_name: "Trainer J",
    trainer_id: "60d0fe4f5311236168a109cd3", // Example ObjectId
    phone_number: 1234567899,
    cnic_number: "1234567890132",
    campus_id: "60d0fe4f5311236168a109ca", // Example ObjectId
    batch_id: "60d0fe4f5311236168a109cb", // Example ObjectId
    monthly_fee: 530,
    fee_status: "Paid",
    attendences: []
  }
];

export { students };
