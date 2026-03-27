import { useState } from "react";
import axios from "axios";


// 👇 STEP 3 function
function Step1({ form, setForm, setStep }) {

  const sendOtp = async () => {
    await axios.post("http://localhost:5000/api/auth/send-otp", {
      email: form.email,
      phone: form.phone
    });
    alert("OTP sent (check terminal)");
  };

  const verifyOtp = async () => {
    await axios.post("http://localhost:5000/api/auth/verify-otp", {
      email: form.email,
      phone: form.phone,
      otp: form.otp
    });
    setStep(2);
  };

  return (
    <div>
      <h2>Step 1: Verify OTP</h2>

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })} />

      <button onClick={sendOtp}>Send OTP</button>

      <input placeholder="Enter OTP"
        onChange={(e) => setForm({ ...form, otp: e.target.value })} />

      <button onClick={verifyOtp}>Verify</button>
    </div>
  );
}

// 👇 STEP 4 function
function Step2({ form, setForm, setStep }) {

  const submitForm = async () => {
    await axios.post("http://localhost:5000/api/leads", form);
    setStep(3);
  };

  return (
    <div>
      <h2>Step 2: Organisation Details</h2>

      <input placeholder="Institution Name"
        onChange={(e) => setForm({ ...form, institution_name: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, institution_type: e.target.value })}>
        <option>Bank</option>
        <option>NBFC</option>
        <option>MFI</option>
      </select>

      <input placeholder="City"
        onChange={(e) => setForm({ ...form, city: e.target.value })} />

      <input placeholder="Loan Book Size"
        onChange={(e) => setForm({ ...form, loan_book_size: e.target.value })} />

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

// 👇 STEP 5 function
function Step3() {
  return (
    <div>
      <h2> Our team will reach out within 24 hours</h2>
    </div>
  );
}

// 👇 MAIN COMPONENT
function SignupPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    email: "",
    phone: "",
    otp: "",
    institution_name: "",
    institution_type: "",
    city: "",
    loan_book_size: ""
  });

  return (
    <div>
      {step === 1 && <Step1 form={form} setForm={setForm} setStep={setStep} />}
      {step === 2 && <Step2 form={form} setForm={setForm} setStep={setStep} />}
      {step === 3 && <Step3 />}
    </div>
  );
}

export default SignupPage;