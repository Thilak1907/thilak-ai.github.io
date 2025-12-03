export const personalInfo = {
    name: "Thilak Kumar V",
    tagline: "AI Engineer | Machine Learning Researcher",
    heroIntro: "An AIML engineer in the making, focused on ML, NLP, Computer Vision, and real-world AI applications.",
    intro: "I am a B.Tech Artificial Intelligence and Machine Learning student at Rajalakshmi Engineering College, Chennai, with a strong foundation in Machine Learning, Deep Learning, NLP, and Computer Vision. I am passionate about building reliable, ethical, and impactful AI solutions that address real-world challenges.\n\nMy research-driven approach has led to multiple publications in reputed conferences and journals. I am particularly interested in Generative AI, Applied Machine Learning, Explainable AI, Intelligent Systems, and MLOps, where I explore how emerging technologies can be transformed into scalable solutions.\n\nBeyond academics, I actively participate in tech communities, hackathons, workshops, and research forums to stay aligned with cutting-edge advancements. Looking ahead, I aspire to pursue my Master’s degree at a globally recognized university abroad, where I can deepen my expertise and contribute meaningfully to the evolving AI ecosystem.",
    email: "thilakvd1907@gmail.com",
    phone: "+91 8939214536",
    linkedin: "https://linkedin.com/in/thilak1907",
    github: "https://github.com/Thilak1907",
    googleScholar: "https://scholar.google.com/citations?user=6uv9uFoAAAAJ&hl=en",
    ieee: "https://ieeexplore.ieee.org/author/613077373586998",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=59993226400",
    resumeUrl: "/THILAK_CV.pdf",
};

export const education = [
    {
        degree: "B.Tech in Artificial Intelligence and Machine Learning",
        institution: "Rajalakshmi Engineering College, Chennai",
        year: "2022 – 2026",
        details: "CGPA: 7.74/10",
        image: "/education/rec_logo.png"
    },
    {
        degree: "Higher Secondary Education (Class 12)",
        institution: "Sindhi Model Senior Secondary School, Chennai (CBSE)",
        year: "2022",
        details: "68%",
        image: "/education/sindhi_model_logo.jpg"
    },
    {
        degree: "Secondary Education (Class 10)",
        institution: "Sindhi Model Senior Secondary School, Chennai (CBSE)",
        year: "2020",
        details: "88%",
        image: "/education/sindhi_model_logo.jpg"
    }
];

export const skills = {
    Languages: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"],
    Frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "React", "Flask"],
    Tools: ["MongoDB", "Firebase", "Git", "Power BI", "Docker", "FastAPI", "MLflow", "ONNX Runtime", "Hugging Face Spaces"],
    Concepts: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analytics", "RPA", "MLOps"]
};

export const experience = [
    {
        role: "Research Intern",
        company: "NIT Silchar",
        duration: "June 2025 – August 2025",
        description: "Contributed to 'Explainable Forecasting for Patient Vital Sign Monitoring'. Developed an AI-driven healthcare framework integrating physiological data forecasting with emotion-based pain recognition. Utilized Random Forest, Gradient Boosting, and MobileNetV2 models, incorporating SHAP and Grad-CAM for explainability.",
    },
    {
        role: "Internship Trainee",
        company: "AEROKNOTZ",
        duration: "July 2024",
        description: "Gained hands-on experience in drone technology, IoT, automation, and AI & ML in UAV systems. Explored autonomous navigation, object detection, and intelligent decision-making."
    }
];

export const projects = [
    {
        title: "NeuroLingo - Smart Brain Health Test",
        tech: ["ReactJS", "ML", "NLP", "Flask"],
        description: "Intelligent multilingual cognitive assessment system for early detection of memory, attention, and language impairments. Built using React, Flask, IndicBERT, and Whisper.",
        github: "https://github.com/Thilak1907/NeuroLingo-Smart-Brain-Health-Test",
        category: "AI/NLP",
        image: "/projects/neurolingo.png"
    },
    {
        title: "Malware Detection using GANs & Transfer Learning",
        tech: ["Python", "TensorFlow", "GAN", "Transfer Learning"],
        description: "Intelligent malware detection system leveraging GAN-based data augmentation and transfer learning (VGG19) to improve classification accuracy. Achieved 94% accuracy.",
        github: "https://github.com/Thilak1907/malware_detection_system",
        category: "AI/Security",
        image: "/projects/malware_detection.png"
    },
    {
        title: "Smart Data Analyzer",
        tech: ["Python", "Flask", "Pandas", "Scikit-learn"],
        description: "A Web-Based Visualization and Prediction Tool for Custom Datasets. Allows users to upload datasets, visualize trends, and perform predictive analysis using machine learning models.",
        github: "https://github.com/Thilak1907/Smart-Data-Analyzer-A-Web-Based-Visualization-and-Prediction-Tool",
        category: "Data Science",
        image: "/projects/smart_data_analyzer.png"
    },
    {
        title: "Photo Restoration with SRGAN",
        tech: ["Python", "OpenCV", "PyTorch", "Flask"],
        description: "Restoring and upscaling old/degraded photographs using Super-Resolution GANs. Improved clarity and detail retention.",
        github: "https://github.com/Thilak1907/Photo_Restoration_with_SRGAN",
        category: "CV/DL",
        image: "/projects/photo_restoration.png"
    },
    {
        title: "Vision-to-Story Generator",
        tech: ["Transformers", "DenseNet201", "GPT-2", "Pandas"],
        description: "AI-driven storytelling system generating coherent narratives from image sequences using DenseNet201 and GPT-2.",
        github: "https://github.com/Thilak1907/Vision-to-Story-Generator",
        category: "CV/NLP",
        image: "/projects/vision_to_story.png"
    }
];

export const publications = [
    {
        title: "Face Recognition Based Attendance System – A Deep Dive",
        category: "Research Paper",
        abstract: "Facial recognition software is becoming commonplace in today's workplaces. It has several applications, including security, authentication, and identity. The fact that it doesn't touch the user and is completely painless undoubtedly contributes to its universal adoption. Building access can be monitored with facial recognition technology in places like schools, offices, and government buildings. We intend to develop a facial recognition-based solution to replace the present tedious and time-consuming manual attendance tracking method. At the hearing, a different prosecutor can show up. As a result, there is expanding backing for further research into this strategy. Find a person in a database, get their personal information, and then pretend to be them online. Student portraits for the database are the students' heads. The LBPH technique and the Haar-Cascade classifier are combined for this purpose. Furthermore, this system encourages the machine learning models to significantly improve their face detection authenticity or accuracy even under poor lighting or in a situation of blocked view. The research can also be used in large institutions by supporting real-time monitoring and centralised attendance ranking. Also, data privacy is ensured through effective encryption techniques. This system can be further extended for emotion recognition and attendance behaviour analytics. This will only require minimal human intervention and the processing speed will be much faster. Consequently, it contributes to a secure technology-driven attendance ecosystem",
        summary: "A facial recognition-based solution to replace manual attendance tracking using LBPH technique and Haar-Cascade classifier for real-time monitoring.",
        year: "2025",
        link: "https://ieeexplore.ieee.org/document/11166971",
        publishedIn: "2025 3rd International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        conferenceDate: "06-08 August 2025",
        dateAdded: "24 September 2025",
        doi: "10.1109/ICSCDS65426.2025.11166971",
        publisher: "IEEE",
        location: "Erode, India"
    },
    {
        title: "Serve Surplus: A Smart Food Redistribution Platform for Reducing Urban Food Waste and Combating Hunger",
        category: "Research Paper",
        abstract: "The \"Serve Surplus\" project is a novel initiative that deals with the issues of food waste and hunger in urban areas. The main idea of this service is an advanced mobile application that serves as a link between food donors, NGOs, and the people who are in a food crisis in their local community. The main aspect of this project is a well-built donation platform that enables donors to quickly and easily upload the details of their surplus foodstuff, like the quantity and the expiration date. The data is then intelligently reshaped with suitable recipients, depending on the range. Additionally, the application highlights open and direct communication through the integrated messaging and notification functions, thus, the donors, recipients, and the delivery personnel can easily coordinate with each other throughout the donation cycle. With its smart way of functioning, \"Serve Surplus\" not only deals with the problems of food waste and hunger quickly but also encourages people to use resources sustainably and to be part of the same collective responsibility in the communities. By the utilization of technology, collaboration and social impact, we will be able to make a significant contribution in decreasing food insecurity and at the same time, will inspire a culture that is resourceful and compassionate.",
        summary: "A smart food redistribution platform connecting donors, NGOs, and the needy to reduce urban food waste and combat hunger.",
        year: "2025",
        link: "https://ieeexplore.ieee.org/document/11167510",
        publishedIn: "2025 3rd International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        conferenceDate: "06-08 August 2025",
        dateAdded: "24 September 2025",
        doi: "10.1109/ICSCDS65426.2025.11167510",
        publisher: "IEEE",
        location: "Erode, India"
    },
    {
        title: "Hybrid Design for Privacy Preserved Image Representation in a Cloud Environment",
        category: "Research Paper",
        abstract: "The ability to store and share media, especially photos, has made cloud computing an essential part of modern life. But there is cause for concern about how secure user data and privacy are in these online photo archives. For this reason, we're embarking on this project to find a solution: a safe way to encrypt and decrypt photos that anyone can use without worrying about prying eyes. Hybrid encryption algorithms are utilised by the system to guarantee that the encrypted photos cannot be accessed by anyone, including the cloud provider. With our system, decrypting images is a breeze, and we make it easy for users by processing their requests instantly. Key components of our project include pre-saving picture encryption and post-retrieval decryption. Anyone concerned about their privacy will find that this solution satisfies their needs for both ease of use and security. By preventing unauthorised parties from accessing users' private images, cloud storage solutions give customers peace of mind.",
        summary: "A secure cloud-based image storage system employing hybrid encryption algorithms to ensure privacy and prevent unauthorized access.",
        year: "2025",
        link: "https://ieeexplore.ieee.org/document/11088725",
        publishedIn: "2025 11th International Conference on Communication and Signal Processing (ICCSP)",
        conferenceDate: "05-07 June 2025",
        dateAdded: "29 July 2025",
        doi: "10.1109/ICCSP64183.2025.11088725",
        publisher: "IEEE",
        location: "Melmaruvathur, India"
    },
    {
        title: "Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation",
        category: "Research Paper",
        abstract: "Rapid malware evolution calls for the creation of novel, imaginative techniques that enhance the accuracy and resilience of traditional detection methods. Here, a hybrid strategy focused on malware detection will be proposed, where GANs and transfer learning are employed to improve the accuracy and resilience of image representations. Converting malware binaries into grayscale images may change how visual features are used to identify specific patterns that could define malware and eventually determine classification. GANs are used to generate artificial malware samples, which enhance the dataset with a variety of adversarial examples that closely mimic the diversity of actual malware. The model is therefore more resistant to deceptive infection techniques. Convolutional neural network pre-training enables transfer learning and saves resources for lengthy training from scratch and decreases the strain of training. As was previously said, the GAN generative adversarial examples feature a wider variety of malware types that enhance its capacity to identify new threats precisely. Opposing the traditional approach, the experimental findings showed that this hybrid strategy improved the detection accuracy and decreased the rate of false positives. The reason for this is its adaptability and scalability, which qualify it for real-time malware detection.",
        summary: "A hybrid malware detection strategy using GANs and transfer learning to enhance detection accuracy and resilience against new threats.",
        year: "2025",
        link: "https://ieeexplore.ieee.org/document/11041490",
        publishedIn: "2025 3rd International Conference on Artificial Intelligence and Machine Learning Applications Theme: Healthcare and Internet of Things (AIMLA)",
        conferenceDate: "29-30 April 2025",
        dateAdded: "27 June 2025",
        doi: "10.1109/AIMLA63829.2025.11041490",
        publisher: "IEEE",
        location: "Namakkal, India"
    },
    {
        title: "Enhancing Education Infrastructure through Machine Learning: A Framework for Classifying and Prioritizing Schools",
        category: "Research Paper",
        abstract: "Education is not just a standard but sets the foundation, empowering students and opportunities in the future. This project proposes the classification of the schools using the “Samagra Shiksha” framework which the Ministry of Education sets. We developed an AI-driven system to classify the schools as structured or odd using UDISE PLUS data. The study describes the methodology of Machine Learning algorithms such as Isolation Forest and Light Gradient Boosting Machine implementation on key factors like grade structure, teacher quality, teacher-student ratio, and infrastructure score. It brings the significance of zone-wise classification and aiding policymakers in prioritizing interventions. This can help the policy makers aware of the condition of the schools and gives them more clarity for allocating resources. By classifying the schools based on their quality metrics, we found that out of 10,48,575 government schools, 85.03% of schools were structured and 14.97% were odd. This highlights the robustness of both algorithms and the critical role of model selection in classifying schools.",
        summary: "An AI-driven framework for classifying and prioritizing schools using UDISE+ data and Machine Learning algorithms like Isolation Forest.",
        year: "2025",
        link: "https://ieeexplore.ieee.org/document/11031645",
        publishedIn: "2025 International Conference on Frontier Technologies and Solutions (ICFTS)",
        conferenceDate: "27-28 March 2025",
        dateAdded: "20 June 2025",
        doi: "10.1109/ICFTS62006.2025.11031645",
        publisher: "IEEE",
        location: "Chennai, India"
    },
    {
        title: "Integrating Facial Expressions and Audio Cues for Real-Time Mental Health Monitoring",
        category: "Research Paper",
        abstract: "Amidst the rise of global health problems, accessible, personalized, and stigma-free support systems are in need. Traditional methods exist, but they lack a real-time and multi-modal environment. The goal of this research is to build an AI-driven mental health support system that estimates the emotional states through facial expressions and audio cues. The facial expression analysis is used in the research to process the real-time inputs with machine learning for the emotion classification tasks, such as anger, sadness, and fear. Audio and text analysis are predominantly designed for analyzing and interpreting the voice and text using NLP to extract the emotional context. By integrating both audio and visual modules, the system achieves the best possible understanding of the emotional state of a person. Furthermore, data mining techniques are intended to find out the recurring emotional patterns in the mental health-related data sets. This has the potential to reshape therapeutic practices, and it could detect the emotional distress of an individual in its early stages.",
        summary: "An AI-driven mental health support system estimating emotional states through real-time analysis of facial expressions and audio cues.",
        year: "Awaiting Publication",
        publishedIn: "International Conference on Intelligent and Innovative Practices in Engineering & Management (IIPEM) 2025",
        conferenceDate: "25th November 2025",
        location: "Amity Global Institute, Singapore",
        status: "Conference Presentation Done"
    },
    {
        title: "NeuroLingo – Smart Brain Health Test in Indian Languages",
        category: "Research Paper",
        abstract: "Early detection of cognitive reduction is essential in directing the neurodegenerative conditions like dementia and Alzheimer's disease. Although conventional screening tools such as the Mini-Mental state Examination (MMSE) and Montreal Cognitive Assessment (MoCA) were mostly restricted to English,limiting their applicability among the rural and the low-literacy populations in India. To overcome these obstacles, we recommend NeuroLingo, a multilingual, AI-driven brain health assessment platform that uses natural language processing (NLP), The automatic speech recognition (ASR), and machine learning models were comprehensively cognitive screening. The system provides simple games like exercises to check to evaluate memory,attention,understanding,and language abilities using both spoken and written responses in Indian languages. The system uses a mix of rule-based scoring and machine learning models, while adjusting the scores according to a person's age and education level so the results are fair for everyone . Reports generated include domain wise scores and overall brain health index (BHI), offering actionable insights for individuals, caregivers, and clinicians. By combining multilingual accessibility with AI- powered analysis, Neurolingo provides a scalable, cost effective, and inclusive solution for early brain health screening in underserved populations.",
        summary: "A multilingual, AI-driven brain health assessment platform using NLP and speech recognition for early detection of cognitive decline.",
        year: "Awaiting Publication",
        publishedIn: "International Conference on Intelligent and Innovative Practices in Engineering & Management (IIPEM) 2025",
        conferenceDate: "25th November 2025",
        location: "Amity Global Institute, Singapore",
        status: "Conference Presentation Done"
    },
    {
        title: "Automated Resume Evaluation and Skill Roadmap Generation Using NLP Techniques",
        category: "Research Paper",
        abstract: "This paper focuses on developing a job matching application using Streamlit, incorporating sophisticated features such as PDF resume analysis, grammar checking, generative AI-powered job matching, real-time job searching, and skill roadmap creation. The application allows users to submit resumes in PDF format and input job descriptions, streamlining an automated assessment of compatibility. Employing a generative AI model, the system generates percentage match ratings, providing insights into the strengths, weaknesses, and missing keywords in resumes. This tailored feedback helps users identify shortcomings in their applications and adjust their profiles to meet job-specific requirements, increasing their chances of success in competitive hiring processes. The software integrates grammar checking via the language_tool_python library to ensure precision and professionalism in resumes. Moreover, the job search function incorporates Indeed's API, enabling users to view live job listings directly inside the platform. Additionally, the skill roadmap feature offers users tailored career advancement pathways, skill suggestions, and educational materials driven by AI models like Google Gemini, TF-IDF, SBERT, and Graph Neural Networks. By integrating generative AI, NLP, and an intuitive interface, the platform simplifies the job application process, offering data-driven insights to improve candidate-employer fit and reduce hiring inefficiencies.",
        summary: "A job matching application using NLP and generative AI for automated resume evaluation, grammar checking, and skill roadmap generation.",
        year: "Awaiting Publication",
        publishedIn: "2025 IEEE INTERNATIONAL CONFERENCE ON INNOVATE FOR HUMANITARIAN TECH SOLUTIONS FOR GLOBAL CHALLENGE (ICIH)",
        conferenceDate: "22nd November 2025",
        location: "ACROPOLIS INSTITUTE OF TECHNOLOGY AND RESEARCH, INDORE",
        status: "Conference Presentation Done"
    },
    {
        title: "Quantum Key Distribution (QKD) – Theory and Applications in AV Security",
        category: "Book Chapter",
        abstract: "Quantum Key Distribution (QKD) represents a pivotal advancement in the field of secure communications, offering theoretically unbreakable encryption by harnessing the principles of quantum mechanics, including superposition, entanglement, and the no-cloning theorem. Unlike traditional cryptographic key exchange protocols, which rely on mathematical complexity, QKD provides information-theoretic security, meaning that its security does not diminish even with the advent of quantum computers. As autonomous vehicles (AVs) become deeply embedded in hyper-connected ecosystems—exchanging real-time data across vehicle-to-everything (V2X) channels—ensuring uncompromised confidentiality, authentication, and data integrity is of paramount importance. This chapter provides a comprehensive overview of QKD, beginning with its theoretical foundations. It explains the underlying quantum principles and how they are applied in QKD protocols such as BB84, B92, and E91. The chapter explores error correction, privacy amplification, and the role of quantum randomness in generating secure cryptographic keys. The second half of the chapter focuses on practical applications of QKD in the domain of autonomous vehicle security. It outlines use cases such as secure V2X communication, vehicle identity authentication, protection of over-the-air (OTA) software updates, and tamper-resistant sensor data transmission. Integration challenges—including mobile quantum channel stability, hardware constraints in vehicles, and cost-effective deployment—are analyzed. Additionally, the chapter presents real-world QKD deployments and pilot projects, examining their relevance and adaptability to the vehicular context. It concludes with a forward-looking view on hybrid cryptographic frameworks combining QKD with classical and post-quantum techniques, and highlights the future potential of quantum-secured vehicular networks. This chapter equips researchers, engineers, and cybersecurity professionals with a deep understanding of how QKD can revolutionize secure communications in the intelligent transportation sector.",
        summary: "A comprehensive overview of Quantum Key Distribution (QKD) and its practical applications in ensuring autonomous vehicle security.",
        year: "Awaiting Publication"
    },
    {
        title: "Introduction to Healthcare 5.0",
        category: "Book Chapter",
        abstract: "Healthcare 5.0 is a new idea in healthcare that aims to use cutting-edge technologies like AI, IoT, and robotics to make medical services even more personalized, efficient, and easy to access. Today, we want a health care system that focuses on the patient. We should collect and analyze data not only to treat illness but also to prevent it. We should promote holistic health and wellness and use artificial intelligence (AI) to process huge amounts of data to make better clinical decisions and accurate diagnoses. At the same time, Internet of Things (IoT) devices should constantly check on a patient's health and allow for proactive disease management. On the other hand, robotics plays a crucial role by enhancing surgical accuracy, reducing recovery times, and ultimately reducing health expenses. Still, the move to Healthcare 5.0 comes with some problems, such as protecting data privacy, making sure systems are safe, and figuring out the moralities of AI and automation. These interoperability issues with existing healthcare infrastructures add another layer of complexity to the integration of emerging technologies. This chapter talks about how predictive analytics in Healthcare 5.0 can help figure out health problems before they get worsened, which leads to a change from providing care after the fact to providing care in the future. In addition to talking about the innovations in question, it looks at real-life situations where these have had a big impact on health outcomes. This gives us a glimpse of how these uses of cutting-edge technology could change healthcare practices everywhere. This chapter is a thorough introduction to Healthcare 5.0. It goes into detail about the technologies, how they can be used, and the problems they can cause. This gives stakeholders the knowledge they need to deal with the complexities of this phase of change in healthcare.",
        summary: "An introduction to Healthcare 5.0, exploring how AI, IoT, and robotics can personalize medical services and improve patient outcomes.",
        year: "Awaiting Publication"
    },
    {
        title: "Human-centricity in AI governance: Use Cases, Challenges and Research Directions",
        category: "Book Chapter",
        abstract: "Human-centric AI governance ensures that individuals, communities, and societal interests are central to AI system design, deployment, and oversight. This chapter proposes a lifecycle-based governance model that integrates human-centric principles across strategy, operations, and technical implementation. Drawing from global frameworks—including the EU AI Act’s risk-based classification, NIST’s AI Risk Management Framework, and Generative AI Profile, ISO/IEC 42001 AI management systems, and OECD/UNESCO AI ethics principles—it translates values such as fairness, accountability, transparency, and inclusivity into measurable controls. Through sector-specific case studies in healthcare diagnostics, financial decision-making, education, and public administration, the chapter demonstrates practical methods for balancing innovation and compliance. It also addresses challenges like scaling human oversight, reconciling global policy diversity, and measuring socio-technical impact. The research agenda highlights pathways toward trust metrics, participatory governance, and adaptive oversight for emerging AI. By combining policy context, operational patterns, and sectoral examples, this chapter provides both a conceptual map and a practical toolkit for embedding human-centricity in AI governance.",
        summary: "A human-centric AI governance model integrating ethical principles into the AI lifecycle for fairness, accountability, and transparency.",
        year: "Awaiting Publication"
    },
    {
        title: "Integrating Genetic, Lifestyle, and Environmental Factors for Chronic Disease Risk Prediction Using Machine Learning-Based Decision Trees",
        category: "Research Paper",
        abstract: "The growing prevalence of chronic diseases emphasizes the need for an overall risk assessment system combining genetic, lifestyle, and environmental determinants. Current predictive models tend to give only limited information by neglecting the multi-dimensional aspect of the risk of disease. This project presents an enhanced machine learning-based technique employing Decision Tree classifiers to enhance the precision of chronic disease risk prediction. Through the study of genetic markers and lifestyle information, the model determines modifiable risk factors and provides individualized suggestions, enabling the population to adopt healthier lifestyles and participate in preventive health. The designed system adopts a systematic pipeline including multi-source data gathering, preprocessing, feature engineering, and predictive evaluation to guarantee high-quality risk assessment. It is able to detect complex interactions between genetic susceptibilities and lifestyle options, enabling more accurate risk estimates. This longitudinal tracking of data facilitates adaptive learning, enhancing the predictive ability of the system and providing users with ongoing insights into their health. By combining innovative analytics with personalized health information, this method optimizes early detection and intervention practices, enabling improved management of chronic diseases. Not only does the model enable people with actionable insights, but it also supports healthcare providers in providing more personalized and effective care. This analytics-driven system is a major leap in preventive care, enabling proactive management of health and lowering the long-term cost of chronic diseases through early risk detection and intervention.",
        summary: "A machine learning-based risk prediction system combining genetic, lifestyle, and environmental factors for personalized chronic disease management.",
        year: "Awaiting Publication"
    }
];

export const achievements = [
    {
        title: "1st Place – Paper Presentation (Adhiyamaan College)",
        image: "/achievements/paper-presentation.jpg",
        description: "Secured 1st place in the National Level Technical Symposium held at Adhiyamaan College of Engineering."
    },
    {
        title: "2nd Place – Project & Poster Presentation (Veltech University)",
        image: "/achievements/project-presentation.jpg",
        description: "Awarded 2nd place for innovative project display and poster presentation at Veltech University."
    },
    {
        title: "Student Peer Evaluator – Tech Star Summit 2025",
        image: "/achievements/peer-evaluator.jpg",
        description: "Served as a Student Peer Evaluator, assessing technical projects and providing constructive feedback."
    },
    {
        title: "LinkedIn Campus Ambassador – Bangalore Office Visit",
        image: "/achievements/linkedin-ambassador.jpg",
        description: "Selected as a LinkedIn Campus Ambassador, gaining insights into corporate culture during a visit to the Bangalore office."
    }
];

export const stats = [
    { label: "Research Publications", value: "5+", sub: "IEEE / Scopus" },
    { label: "AI Projects", value: "6+", sub: "ML / DL / NLP" },
    { label: "Research Internship", value: "1", sub: "NIT Silchar" },
    { label: "Experience", value: "1+ Year", sub: "in ML/DL/NLP" },
    { label: "CGPA", value: "7.74", sub: "Consistent Academic Record" }
];

export const certifications = [
    {
        title: "Understanding Incubation and Entrepreneurship",
        issuer: "NPTEL",
        date: "Jul-Oct 2025",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/107/noc25-de20/Course/NPTEL25DE20S55390821810226191.pdf"
    },
    {
        title: "Responsible & Safe AI Systems",
        issuer: "NPTEL",
        date: "Jan-Apr 2025",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs118/Course/NPTEL25CS118S65390854810226191.pdf"
    },
    {
        title: "Artificial Intelligence (AI) for Investments",
        issuer: "NPTEL",
        date: "Jan-Apr 2025",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/110/noc25-mg08/Course/NPTEL25MG08S44320555204477636.pdf"
    },
    {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL",
        date: "Jul-Oct 2024",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S14320611404477636.pdf"
    },
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2024",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S105250907903827001.pdf"
    },
    {
        title: "Data Analysis with Python",
        issuer: "IBM",
        date: "2025",
        link: "https://www.coursera.org/account/accomplishments/verify/0U1PNVLK9PEP"
    },
    {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "2025",
        link: "https://www.coursera.org/account/accomplishments/verify/EUPNEUIQ9QO9"
    },
    {
        title: "Machine Learning with Python",
        issuer: "IBM",
        date: "2025",
        link: "https://www.coursera.org/account/accomplishments/verify/50OC635TTN79"
    }
];
