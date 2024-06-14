import React from "react";

function Greeting({ lang, children}) {
  function getGreeting(lang){
    switch(lang){
        case 'de':
            return "Halo";
            break;
        case 'en':
            return "Hello";
            break;
        case 'es':
            return "Hola"
            break;
        case "fr":
            return "Bonjour"
            break;
        default:
            return 'Hello'
    }
  }
  console.log(lang, children);
  return (
    <div className="flex justify-center">
        <p className="text-2xl border-2">{getGreeting(lang)} {children}</p>
    </div>
  );
}

export default Greeting;
