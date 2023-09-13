import React from 'react'

const PharmacyLogin = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <p>{props.heading}</p>
    <div>
   <div className="mb-3">
  <label for="mybox" className="form-label">Email address</label>
  <input type="email" className="form-control" name="email" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="password" className="form-label">Password</label>
  <input type="password" className="form-control" name="password" placeholder="***********" />
</div>
<div className="mb-3">
<button type="button" class="btn btn-primary">Log In</button>
</div>
</div>
</div>
  )
}

export default PharmacyLogin
