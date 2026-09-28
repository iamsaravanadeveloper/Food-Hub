import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get("page")) || 1
    const usersPerPage = 5;
    const totalUsers = [
        {
            id: "01",
            name: "Saravana Kumar",
            email: "saravana03tmg@gmail.com",
            city: "Madurai",
            role: "MERN STACK DEVELOPER"
        },
        {
            id: "02",
            name: "Arun Kumar",
            email: "arun@gmail.com",
            city: "Chennai",
            role: "FRONTEND DEVELOPER"
        },
        {
            id: "03",
            name: "Vignesh Raj",
            email: "vignesh@gmail.com",
            city: "Coimbatore",
            role: "BACKEND DEVELOPER"
        },
        {
            id: "04",
            name: "Karthik S",
            email: "karthik@gmail.com",
            city: "Trichy",
            role: "FULL STACK DEVELOPER"
        },
        {
            id: "05",
            name: "Praveen Kumar",
            email: "praveen@gmail.com",
            city: "Salem",
            role: "REACT DEVELOPER"
        },
        {
            id: "06",
            name: "Surya Prakash",
            email: "surya@gmail.com",
            city: "Madurai",
            role: "NODE JS DEVELOPER"
        },
        {
            id: "07",
            name: "Dinesh Kumar",
            email: "dinesh@gmail.com",
            city: "Bangalore",
            role: "SOFTWARE DEVELOPER"
        },
        {
            id: "08",
            name: "Rohit Raj",
            email: "rohit@gmail.com",
            city: "Hyderabad",
            role: "UI DEVELOPER"
        },
        {
            id: "09",
            name: "Ajay Kumar",
            email: "ajay@gmail.com",
            city: "Erode",
            role: "MERN DEVELOPER"
        },
        {
            id: "10",
            name: "Manoj Kumar",
            email: "manoj@gmail.com",
            city: "Tirunelveli",
            role: "JAVA DEVELOPER"
        },
        {
            id: "11",
            name: "Hari Prasad",
            email: "hari@gmail.com",
            city: "Thanjavur",
            role: "PYTHON DEVELOPER"
        },
        {
            id: "12",
            name: "Gokul Raj",
            email: "gokul@gmail.com",
            city: "Dindigul",
            role: "WEB DEVELOPER"
        },
        {
            id: "13",
            name: "Naveen Kumar",
            email: "naveen@gmail.com",
            city: "Bengaluru",
            role: "ANGULAR DEVELOPER"
        },
        {
            id: "14",
            name: "Sanjay Kumar",
            email: "sanjay@gmail.com",
            city: "Vellore",
            role: "MOBILE DEVELOPER"
        },
        {
            id: "15",
            name: "Madhan Raj",
            email: "madhan@gmail.com",
            city: "Thoothukudi",
            role: "SOFTWARE ENGINEER"
        },
        {
            id: "16",
            name: "Ashwin Kumar",
            email: "ashwin@gmail.com",
            city: "Tiruppur",
            role: "DATABASE DEVELOPER"
        },
        {
            id: "17",
            name: "Lokesh Raj",
            email: "lokesh@gmail.com",
            city: "Karur",
            role: "DEVOPS ENGINEER"
        },
        {
            id: "18",
            name: "Sathish Kumar",
            email: "sathish@gmail.com",
            city: "Nagercoil",
            role: "CLOUD ENGINEER"
        },
        {
            id: "19",
            name: "Deepak Raj",
            email: "deepak@gmail.com",
            city: "Kanchipuram",
            role: "TESTING ENGINEER"
        },
        {
            id: "20",
            name: "Vijay Kumar",
            email: "vijay@gmail.com",
            city: "Pondicherry",
            role: "FULL STACK DEVELOPER"
        }
    ]
    //calcution

    const totalPages = Math.ceil(totalUsers.length / usersPerPage)
    console.log(totalPages)
    const startingInd = (currentPage - 1) * usersPerPage
    const endingInd = startingInd + usersPerPage
    const Users = totalUsers.slice(startingInd, endingInd)
    console.log(Users)
    const gotoPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setSearchParams({ page: pageNum })
        }
    }
    const handlePre = () => {
        if (currentPage > 1) {
            gotoPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < totalPages) {
            gotoPage(currentPage + 1)
        }
    }
    // return (
    //     <>
    //         <h1>Pagination</h1>
    //         <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
    //             {Users.map((user => (
    //                 <div key={user.id} style={{ border: "1px solid black", width: "400px" }}>
    //                     <h1>{user.name}</h1>
    //                     <p>Id : {user.id}</p>
    //                     <p>Email : {user.email}</p>
    //                     <p>Role : {user.role}</p>
    //                     <p>City : {user.city}</p>
    //                 </div>
    //             ))
    //             )}
    //             <div>
    //                 <button onClick={handlePre}>Previous</button>
    //                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((item) => {
    //                         return (
    //                             <button onClick={()=>gotoPage(item)}>{item}</button>
    //                         )
    //                     })}
    //                 <button onClick={handleNext}>Next</button>
    //             </div>

    //         </div>
    //     </>

    // )
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f4f6f8",
                    padding: "40px 20px",
                    fontFamily: "Arial, sans-serif"
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#222",
                        marginBottom: "30px"
                    }}
                >
                    User Pagination
                </h1>

                {/* Users */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
                        justifyContent: "center",
                        gap: "20px"
                    }}
                >
                    {Users.map((user) => (
                        <div
                            key={user.id}
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "20px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e5e5",
                                transition: "0.3s"
                            }}
                        >
                            <h2
                                style={{
                                    margin: "0 0 15px",
                                    color: "#2563eb"
                                }}
                            >
                                {user.name}
                            </h2>

                            <p>
                                <strong>ID:</strong> {user.id}
                            </p>

                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>

                            <p>
                                <strong>City:</strong> {user.city}
                            </p>

                            <p>
                                <strong>Role:</strong>{" "}
                                <span
                                    style={{
                                        color: "#16a34a",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {user.role}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "35px",
                        flexWrap: "wrap"
                    }}
                >
                    <button
                        onClick={handlePre}
                        disabled={currentPage === 1}
                        style={{
                            padding: "10px 18px",
                            border: "none",
                            borderRadius: "8px",
                            backgroundColor:
                                currentPage === 1 ? "#cbd5e1" : "#2563eb",
                            color: "white",
                            cursor:
                                currentPage === 1
                                    ? "not-allowed"
                                    : "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Previous
                    </button>

                    {Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                    ).map((item) => (
                        <button
                            key={item}
                            onClick={() => gotoPage(item)}
                            style={{
                                width: "40px",
                                height: "40px",
                                border: "none",
                                borderRadius: "8px",
                                backgroundColor:
                                    currentPage === item
                                        ? "#2563eb"
                                        : "white",
                                color:
                                    currentPage === item
                                        ? "white"
                                        : "#333",
                                boxShadow:
                                    "0 2px 6px rgba(0,0,0,0.1)",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            {item}
                        </button>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: "10px 18px",
                            border: "none",
                            borderRadius: "8px",
                            backgroundColor:
                                currentPage === totalPages
                                    ? "#cbd5e1"
                                    : "#2563eb",
                            color: "white",
                            cursor:
                                currentPage === totalPages
                                    ? "not-allowed"
                                    : "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Next
                    </button>
                </div>

                {/* Page info */}
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "15px",
                        color: "#666"
                    }}
                >
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </>
    )
}
