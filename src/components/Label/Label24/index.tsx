import React from "react";

// import stylesheets
import "./label24.scss";

import label from "../../../assets/labels/Label-24.svg";

interface LabelProps {
  bottleName: string;
  vol: string;
  cl: string;
  tagLine: string;
  color: string;
  batchDate: string;
  bottleType: string;
  file?: string;
}

const Label24 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  return (
    <div
      className="label"
      style={{
        height: "150px",
        width: "150px",
      }}
    >
      <img
        src={label}
        width={146}
        height={146}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "150px", height: "150px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: "white",
            fontSize: `14px`,
            position: "relative",
            textAlign: "center",
            marginTop: "18px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: `6px`,
            position: "relative",
            marginTop: "70px",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4px",
              marginLeft: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                position: "relative",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "5px",
              marginTop: "2px",
              marginRight: "12px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BigLabel24 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  return (
    <div
      className="label"
      style={{
        height: "380px",
        width: "380px",
        borderRadius: "80px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "380px", height: "380px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: "white",
            fontSize: `37px`,
            position: "relative",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: `15px`,
            position: "relative",
            marginTop: "170px",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              marginLeft: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                position: "relative",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "10px",
              marginTop: "2px",
              marginRight: "20px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Label24;