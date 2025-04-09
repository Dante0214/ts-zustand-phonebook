import { useState } from "react";
import { useContactStore } from "../stores/useContactStore";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = useContactStore();
  const handleAdd = () => {
    if (name && phoneNumber) {
      addContact(name, phoneNumber);
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">연락처 추가</h2>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="전화번호"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            취소
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
