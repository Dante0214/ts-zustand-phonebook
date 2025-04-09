import { create } from "zustand";
import { Contact } from "../types/types";

interface ContactStoreType {
  phoneBook: Contact[];
  searchTerm: string;
  addContact: (name: string, phoneNumber: string) => void;
  removeContact: (id: number) => void;
  setSearchTerm: (term: string) => void;
}

export const useContactStore = create<ContactStoreType>((set) => ({
  phoneBook: [],
  searchTerm: "",
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { name, phoneNumber, id: Date.now() }],
    })),
  removeContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((contact) => contact.id !== id),
    })),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
