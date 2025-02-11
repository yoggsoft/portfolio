export default function Footer () {
  return (
    <footer className="">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 mx-auto text-center">
        <p className="text-center">{(new Date()).getFullYear()} - Manuel Reyes</p>
      </div>
    </footer>
  );
}