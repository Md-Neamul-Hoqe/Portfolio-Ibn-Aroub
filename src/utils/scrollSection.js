const scrollSection = (section) => {
    const thisSection = document.querySelector(`#${section}`)
    // console.log(section)

    const sectionStart = thisSection.offsetTop;
    const sectionEnd = thisSection.offsetTop + thisSection.offsetHeight;
    // console.log(sectionEnd);
    return { section, sectionStart, sectionEnd }
}

export default scrollSection