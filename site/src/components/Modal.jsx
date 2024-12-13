import React from "react";

export const Modal = ({ children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                {children}
            </div>
        </div>
    );
};
