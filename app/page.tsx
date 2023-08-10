"use client";

import { LazyImage } from "@/components/LazyImage";
import { useState } from "react";
import type { MouseEventHandler } from "react";
const random = () => Math.floor(Math.random() * 122) + 1;

const parrafo: string =
  "text-xl text-gray-600 font-semibold text-center mt-4 mb-4";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const randomImage: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const image: string = `https://randomfox.ca/images/${random()}.jpg`;
    setImages([...images, image]);
  };

  return (
    <>
      <div className=" w-screen flex flex-col justify-center items-center mt-12 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-purple-800 text-center mb-4">
            React+TypeScript{" "}
          </p>
          <h1 className="font-extrabold text-gray-800 text-4xl text-center">
            Componente Lazy Image
          </h1>
          <p className={parrafo}>
            {" "}
            Este es un componente que permite crear imagenes randm de zorros{" "}
          </p>
          <p className="text-center">🦊🦊🦊🦊</p>

          <p className={parrafo}>
            Las imagenes no se descargaran hasta que sean visibles en la
            pantalla
          </p>

          <p className="text-center">🙀🙀🙀🙀🙀</p>

          <button
            className="w-32 h-14 rounded-full bg-purple-800 mt-7 text-white font-bold"
            onClick={randomImage}
          >
            Generar🦊
          </button>
          {images.map((image, index) => (
            <LazyImage key={index} image={image} alt="fox" />
          ))}
        </div>
      </div>
    </>
  );
}
