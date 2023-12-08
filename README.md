# [Ibn Aroub Portfolio](http://ibn-aroub-portfolio.surge.sh/)

This project is a personal portfolio website for Ibn Aroub (me) built using ReactJS in VITE. It showcases Ibn Aroub's skills, projects, and other relevant information. There is no database being used in version 0.0.0. For data fetching, we utilize JSON-formatted data in the public folder.

## Project Structure

- `src/`: Contains the source code for the project.
- `public/`: Contains JSON formatted data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Ibn-Aroub-Portfolio.git
   ```

2. Install dependencies: [before installation please check the folder name is "Ibn-Aroub-Portfolio" (may suffix with main)]

   ```bash
   cd Ibn-Aroub-Portfolio
   npm install
   ```

## Packages Used

The following npm packages were utilized in this project:

- **@tanstack/react-query**: v5.8.4 for handle side effect
- **axios**: v1.6.2 to handle data fetching
- **react-router-hash-link**: v2.4.3 to linking sections to navbar
<!-- - **react-helmet-async**: v2.0.0  -->
- **localforage**: v1.10.0
- **match-sorter**: v6.3.1
- **react**: v18.2.0
- **react-dom**: v18.2.0
- **react-router-dom**: v6.19.0
- **sort-by**: v0.0.2

## Usage

To start the development server:

```bash
npm run dev
```

This will run the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Build

To create a production build:

```bash
npm run build
```

This will generate optimized production-ready files in the `dist/` directory.

## Deployment

You can deploy this project to your hosting platform of choice. Ensure to configure your deployment settings based on the chosen hosting service.

```bash
cd dist; cp index.html 200.html; cd ../; surge dist;
```

If you want to deploy to surge use this code.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to tailor this README to include specific instructions, guidelines, or additional details about your project.
