import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Recipe
        </Link>
      </div>
      {/* Recipe cards go here */}
    </div>
  );
}

export default HomePage;
