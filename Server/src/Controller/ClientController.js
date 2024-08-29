async function fetchClientDetails() {
    try {
        const response = await fetch("/api/transanction/list");
        if(!response) throw new Error("Network response is not ok!");

        const data = await response.json();
        if(Array.isArray(data)) {
            
        }
    } catch (error) {
        console.error("500", error);
    }
}