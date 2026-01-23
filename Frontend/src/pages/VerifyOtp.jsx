import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function VerifyOtp() {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { state } = useLocation()   // contains email

  const handleVerify = async () => {
    const res = await fetch("http://127.0.0.1:4000/api/users/verify-reset-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        otp
      })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message)
      return
    }

    // OTP verified ✅
    navigate("/reset-password", { state: { email: state.email } })
  }

  return (
    <>
      <h2>Verify OTP</h2>
      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleVerify}>Verify</button>
    </>
  )
}

export default VerifyOtp
