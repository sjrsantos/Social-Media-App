import {
  collection,
  doc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

/**
 * Function to load all the data from the Post collection.
 * @returns {Promise} - A promise that resolves with the data from the database.
 * @async - This function is asynchronous.
 */
export async function load() {
  const querySnapshot = await getDocs(query(collection(db, "posts")));
  return processQuerySnapshot(querySnapshot);
}

/**
 * Load all promoted posts from the Post collection.
 * @returns {Promise} - A promise that resolves with the data (posts promoted) from the database.
 *
 */
export async function loadPromoted() {
  const q = query(collection(db, "posts"), where("promote", "==", true));
  const querySnapshot = await getDocs(q);
  return processQuerySnapshot(querySnapshot);
}

/**
 * Converts a Firebase query Snapshot into an array of objects.
 * @param {*} querySnapshot - A query snapshot from the database.
 * @returns {Array} - An array with the data from the database.
 * @throws {Error} - An error if the data cannot be loaded from the database.
 */
function processQuerySnapshot(querySnapshot) {
  const data = [];
  try {
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
        removable: doc.data().removable !== false, // Set removable to true if not explicitly false
      });
    });
  } catch (error) {
    throw new Error("Error loading data from the database.");
  }
  return data;
}

/**
 *  Load a post by its ID from the Post collection and display it.
 * @param {*} id - The ID of the post to load.
 * @returns - A promise that resolves with the data from the database.
 */
export async function loadById(id) {
  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        removable: docSnap.data().removable !== false, // Set removable to true if not explicitly false
      };
    }
  } catch (error) {
    throw new Error("Error loading data from the database.");
  }

  return null;
}
