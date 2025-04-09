import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" min-h-screen flex flex-col items-center py-10 relative bg-gray-100 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📇 내 연락처</h1>
      <div className=" w-fit max-w-md px-4">
        <ContactList />
      </div>
      <div className=" fixed bottom-6 right-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-4 rounded-full shadow-md hover:bg-blue-600 cursor-pointer"
        >
          추가
        </button>
      </div>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
