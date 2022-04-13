import type { FC } from "react";

const SearchInput: FC = (): JSX.Element => {
  return (
    <div className="w-2/5 rounded-full font-semibold px-4 py-4 bg-white text-black mt-12 flex items-center justify-between shadow-md">
      <input
        type="text"
        placeholder="Want to start your journey?"
        className="w-full font-light text-2xl md:text-lg pl-6 mr-2 focus:border-0 focus:outline-none"
      />
      <button className="bg-light-maroon text-white font-semibold text-lg rounded-full px-4 py-2 hover:bg-light-maroon-dark transition-colors duration-300">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
