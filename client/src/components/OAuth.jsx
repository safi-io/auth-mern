import React from "react";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
        
    } catch (error) {
      console.log("Could not log-in with Google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}
