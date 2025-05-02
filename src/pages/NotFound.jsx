const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <a href="/" className="mt-8 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
        Return Home
      </a>
    </div>
  );
};

export default NotFound;


