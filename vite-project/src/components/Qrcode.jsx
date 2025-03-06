import { useState } from "react";

 export const Qrcode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR() {
        if (!qrData || !qrSize) {
            console.error("QR data and size are required");
            return;
        }

        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code:", error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQR() {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error downloading QR code:", error);
            });
    }

    return (
        <div className="app-container">
            <h3>QR Code Generator</h3>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="Generated QR Code" className="qr-code-image" />}
            <div>
                <label htmlFor="dataInput" className="input-label">Data for QR code</label>
                <input
                    type="text"
                    id="dataInput"
                    value={qrData}
                    placeholder="Enter data for QR code"
                    onChange={(e) => setQrData(e.target.value)}
                />
                <label htmlFor="sizeInput" className="input-label">Image size for QR code</label>
                <input
                    type="text"
                    id="sizeInput"
                    value={qrSize}
                    placeholder="Enter size for QR code"
                    onChange={(e) => setQrSize(e.target.value)}
                />
                <button className="Generate-btn" disabled={loading} onClick={generateQR}>Generate QR code</button>
                <button className="Download-btn" onClick={downloadQR}>Download QR code</button>
            </div>
            <p>Designed by Sindhuma_Vvm</p>
        </div>
    );
};