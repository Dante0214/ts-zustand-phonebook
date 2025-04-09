import { useContactStore } from "../stores/useContactStore";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContactStore();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="이름 또는 전화번호로 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
