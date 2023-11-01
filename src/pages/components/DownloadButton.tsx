import CV from '../../assets/Martin Galoux English Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
} from '@fortawesome/free-solid-svg-icons'

function DownloadButton() {
  console.log(CV)

  const downloadFile = () => {
    // Replace 'path/to/your/local/file.txt' with the actual path to your file
    const fileUrl = CV;

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create an object URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Martin Galoux CV English.txt'; // Specify the desired file name

        // Programmatically click the anchor to trigger the download
        a.click();

        // Clean up by revoking the object URL
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <button onClick={downloadFile} className='download-button'>
      <FontAwesomeIcon color="white" icon={faDownload} size="lg" />
      Curriculum Vitae
    </button>
  );
}

export default DownloadButton;