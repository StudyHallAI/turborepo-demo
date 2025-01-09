import { type JSX } from "react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export function Card({ title, description, className }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-md ${
        className ?? ""
      }`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}
