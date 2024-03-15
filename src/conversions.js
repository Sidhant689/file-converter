import * as FaIcons from 'react-icons/fa';
import * as BsFile from 'react-icons/bs'

const conversions = [
    { name: 'Image to PDF', icon: FaIcons.FaFileImage },
    { name: 'JPG to PNG', icon: FaIcons.FaFileImage },
    { name: 'PNG to JPG', icon: FaIcons.FaFileImage },
    { name: 'Word to PDF', icon: FaIcons.FaFileWord },
    { name: 'PDF to Word', icon: FaIcons.FaFilePdf },
    { name: 'PDF to Excel', icon: FaIcons.FaFilePdf },
    { name: 'Excel to PDF', icon: FaIcons.FaFileExcel },
    { name: 'Text to PDF', icon: FaIcons.FaFileAlt },
    { name: 'PDF to Image', icon: FaIcons.FaFilePdf },
    { name: 'Video to GIF', icon: FaIcons.FaVideo },
    { name: 'Audio to Text', icon: FaIcons.FaFileAudio },
    { name: 'HTML to PDF', icon: FaIcons.FaHtml5 },
    { name: 'EPUB to PDF', icon: FaIcons.FaBookOpen },
    { name: 'PDF to EPUB', icon: FaIcons.FaFilePdf },
    { name: 'MP4 to MP3', icon: FaIcons.FaFileVideo },
    { name: 'MP3 to WAV', icon: BsFile.BsFiletypeMp3 },
];

export default conversions;
