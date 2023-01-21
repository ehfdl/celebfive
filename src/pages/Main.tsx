import React, { useState } from "react";
import Login from "../components/Login";
function Main() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <button onClick={openModal}>테스트 하러가기</button>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
    </>
  );
}

export default Main;
