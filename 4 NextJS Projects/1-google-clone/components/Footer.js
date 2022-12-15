export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-full text-center py-3 text-sm text-gray-600 whitespace-nowrap'>
      <p>Copyright &copy; {new Date().getFullYear()} Forrest McKinney</p>
    </footer>
  );
}
