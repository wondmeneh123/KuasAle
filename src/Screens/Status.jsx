import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fb.";
// Adjust this path to your config

const Status = () => {
  const [isThereMatch, setIsThereMatch] = useState(false);
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const checkForMatch = async () => {
      try {
        // Fetch all matches from the 'matches' collection
        const querySnapshot = await getDocs(collection(db, "matches"));
        const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

        querySnapshot.forEach((doc) => {
          const match = doc.data();
          // Compare the match date with the current date
          if (match.date === today) {
            setIsThereMatch(true);
            setMatchData(match); // Save the match data if there's a match
          }
        });
      } catch (error) {
        console.error("Error fetching match data: ", error);
      }
    };

    checkForMatch();
  }, []);

  return (
    <div className="flex h-screen justify-around flex-col items-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        {isThereMatch ? (
          <>
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-4xl font-semibold">
                {matchData?.day || "Match Day"}
              </h1>
              <p className="text-md">{matchData?.date || "Unknown Date"}</p>
            </div>
            <h1 className="text-9xl">⚽</h1>
            <h2 className="text-center text-3xl font-bold">
              COME ON! LET’S PLAY <br />
              THERE IS A GAME
            </h2>
            <div className="flex text-xl font-semibold">
              <p>⌛</p>
              <p>@ {matchData?.time || "Unknown Time"} LOCAL TIME</p>
            </div>
          </>
        ) : (
          <h2 className="text-center text-3xl font-bold">
            No match scheduled for today
          </h2>
        )}
      </div>
    </div>
  );
};

export default Status;
