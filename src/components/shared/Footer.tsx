export const Footer = () => {
  return (
    <footer className="py-4 sm:py-8 px-4 text-sm sm:text-sm text-center bg-gray-100 text-gray-800 shadow-card">
      <p>
        © {new Date().getFullYear()} Studentská unie, Všechna práva vyhrazena
      </p>
    </footer>
  );
};
