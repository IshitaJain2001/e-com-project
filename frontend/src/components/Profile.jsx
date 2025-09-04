// // import { useEffect, useState } from "react";

// // function Profile() {
// // const [isloggedin, setIsloggedin] = useState(false)

// //  const [loggdinUser, setLoggedinuser]= useState({})
// //   useEffect(() => {
  

// //     async function isLoggedIn(){
// //       let res= await fetch("http://localhost:3000/user/getProfile", {
// //       method: "GET",
// //       credentials: "include", 
// //     })
// // const data = await res.json()
// //     if(res.ok){
// // setIsloggedin(true)
// // setLoggedinuser(data.user)
// //     }
// //     }
// //     isLoggedIn()
// //   }, []);

 
// //   const handleSignup = async () => {
// //     const res = await fetch("http://localhost:3000/signup", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       credentials: "include",
// //       body: JSON.stringify(form),
// //     });
// //     const data = await res.json();
// //     setPage(data.page);
// //     setUser(data.user);
// //   };


// //   const handleLogin = async () => {
// //     const res = await fetch("http://localhost:3000/login", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       credentials: "include",
// //       body: JSON.stringify({ userName: form.userName, password: form.password }),
// //     });
// //     const data = await res.json();
// //     setPage(data.page);
// //     setUser(data.user);
// //   };

// //   // 🔹 Logout
// //   const handleLogout = async () => {
// //     const res = await fetch("http://localhost:5000/logout", {
// //       method: "POST",
// //       credentials: "include",
// //     });
// //     const data = await res.json();
// //     setPage(data.page);
// //     setUser(null);
// //   };


// //   if (!isloggedin) {
// //     return (
// //       <div>
// //         <h2>Signup</h2>
// //         <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
// //         <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
// //         <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
// //         <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
// //         <button onClick={handleSignup}>Signup</button>

// //         <h2>Login</h2>
// //         <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
// //         <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
// //         <button onClick={handleLogin}>Login</button>
// //       </div>
// //     );
// //   }

// //   if (isloggedin) {
// //     return (
// //       <div>
// //         <h2>Welcome {user?.firstName} {user?.lastName}</h2>
// //         <p>Username: {user?.userName}</p>
// //         <button onClick={handleLogout}>Logout</button>
// //       </div>
// //     );
// //   }
// // }

// // export default Profile;


// import { useEffect, useState } from "react";

// function Profile() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [form, setForm] = useState({ firstName: "", lastName: "", userName: "", password: "" });

//   useEffect(() => {
//     async function checkLogin() {
//       let res = await fetch("http://localhost:3000/user/getProfile", {
//         method: "GET",
//         credentials: "include",
//       });
      
      
//       const data = await res.json();
//       console.log(data);
      
//       if (res.ok) {
//         setIsLoggedIn(true);
//         setLoggedInUser(data.user);
//       }
//     }
//     checkLogin();
//   }, []);

//   const handleSignup = async () => {
//     const res = await fetch("http://localhost:3000/user/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(form),
//     });
//     if(res.status==201){
//     let data= await res.json()
// alert(data.message)
//     }
//     else{
//         let data= await res.json()
//       console.log(data);
      
//     }

//   };

//   const handleLogin = async () => {
//     const res = await fetch("http://localhost:3000/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ userName: form.userName, password: form.password }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       setIsLoggedIn(true);
//       setLoggedInUser(data.user);
//     }
//   };

//   const handleLogout = async () => {
//     const res = await fetch("http://localhost:3000/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//     if (res.ok) {
//       setIsLoggedIn(false);
//       setLoggedInUser(null);
//       setForm({ firstName: "", lastName: "", userName: "", password: "" });
//     }
//   };

//   if (!isLoggedIn) {
//     return (
//       <div>
//         <h2>Signup</h2>
//         <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
//         <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
//         <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
//         <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
//         <button onClick={handleSignup}>Signup</button>

//         <h2>Login</h2>
//         <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
//         <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     );
//   }

//   if (isLoggedIn) {
//     return (
//       <div>
//         <h2>Welcome {loggedInUser?.firstName} {loggedInUser?.lastName}</h2>
//         <p>Username: {loggedInUser?.userName}</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   }
// }

// export default Profile;


import { useEffect, useState } from "react";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", userName: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      let res = await fetch("http://localhost:3000/user/getProfile", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setIsLoggedIn(true);
        setLoggedInUser(data.user);
      }
    }
    checkLogin();
  }, []);

  const handleSignup = async () => {
    const res = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    if (res.status === 201) {
      let data = await res.json();
      alert(data.message);

      // 🔹 Show loading bar for 2 sec then switch to login
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowSignup(false); // hide signup form
      }, 2000);
    } else {
      let data = await res.json();
      console.log(data);
    }
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ userName: form.userName, password: form.password }),
    });
    const data = await res.json();
    console.log(data);
    
    if (res.ok) {
      setIsLoggedIn(true);
      setLoggedInUser(data.user);
    }
  };

  const handleLogout = async () => {
    const res = await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      setIsLoggedIn(false);
      setLoggedInUser(null);
      setForm({ firstName: "", lastName: "", userName: "", password: "" });
      setShowSignup(true); // show signup again when logout
    }
  };

  // 🔹 If user is not logged in
  if (!isLoggedIn) {
    return (
      <div>
        {loading ? (
          <h3>⏳ Please wait... Signing you up</h3>
        ) : (
          <>
            {showSignup && (
              <>
                <h2>Signup</h2>
                <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
                <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
                <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
                <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
                <button onClick={handleSignup}>Signup</button>
              </>
            )}

            <h2>Login</h2>
            <input placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />
            <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
    );
  }

  // 🔹 If user is logged in
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome {loggedInUser?.firstName} {loggedInUser?.lastName}</h2>
        <p>Username: {loggedInUser?.userName}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Profile;
