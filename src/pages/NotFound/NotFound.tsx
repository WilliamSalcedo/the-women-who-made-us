import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-gray-600">Ruta no encontrada.</p>
      <Link to="/" className="underline">Volver al inicio</Link>
    </section>
  );
}
