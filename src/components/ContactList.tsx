import { useContactStore } from "../stores/useContactStore";
import SearchBar from "./SearchBar";

const ContactList = () => {
  const { phoneBook, removeContact, searchTerm } = useContactStore();

  const filteredContacts = phoneBook.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
  );

  if (phoneBook.length === 0) {
    return <p className="text-center text-gray-500">연락처가 없습니다.</p>;
  }

  return (
    <div className="space-y-4">
      <SearchBar />
      {filteredContacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white rounded-xl p-4 shadow-md flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-medium text-gray-800">{contact.name}</p>
            <p className="text-gray-600 text-sm">{contact.phoneNumber}</p>
          </div>
          <button
            onClick={() => removeContact(contact.id)}
            className="text-red-500 hover:underline"
          >
            🗑 삭제
          </button>
          {/* 삭제/수정 버튼 등 추후 추가 가능 */}
        </div>
      ))}
      {filteredContacts.length === 0 && searchTerm && (
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ContactList;
