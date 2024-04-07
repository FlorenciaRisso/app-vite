import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3030/api/users?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setTotalPages(Math.ceil(data.count / 20));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <div className="card-header w-100 text-center">
            <h2 className="mt-3">Lista de Usuarios</h2>
          </div>

          <div className="user-list">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                index={user.id}
              />
            ))}
          </div>
        </section>

        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span className="mx-4">
            {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </main>
    </>
  );
}

export default Users;
