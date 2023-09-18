import { db } from "../config/firebase";
import { 
    doc,
    setDoc,
    collection,
    getDocs,
    deleteDoc,
} from 'firebase/firestore';

// Method to Create Post Doc to collections
const createFeedbackDoc = async (feedback) => {
    const postDocRef = doc(db, 'feedbacks', feedback.id);
    const createdAt = new Date();
    try {
        await setDoc(postDocRef, {...feedback, createdAt});
    }
    catch(err) {
        console.log(err);
    }
}

// Method to Get Data from collections
const getDataFromCollections = async () => {
    const collectionRef = collection(db, 'feedbacks');
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => {
        return doc.data();
    });

    return data;
}

// Method to delete feedback from collections
const deleteFeedback = async (feedbackID) => {
    try {
        await deleteDoc(doc(db, "feedbacks", feedbackID));
    }
    catch(err) {
        console.log(err);
    }
}

// Method to delete collection
const clearFeedbacks = async () => {
    try {
        const collectionRef = collection(db, 'feedbacks');
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.docs.map(async (doc) => 
            await deleteFeedback(doc.id)
        );
    } catch (error) {
        console.error('Error clearing feedbacks:', error);
    }
}

export {
    createFeedbackDoc,
    getDataFromCollections,
    deleteFeedback,
    clearFeedbacks,
};
