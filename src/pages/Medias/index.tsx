import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Medias: FC = () => {
    return (
        <div className="medias">
            <div className="container">
                <h1 className="medias-title" data-testid="medias-page">
                    Medias
                </h1>
                <Link to="/characters" data-testid="medias">
                    Characters link
                </Link>
            </div>
        </div>
    );
};

export default Medias;
