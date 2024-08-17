export const staffFormRules = {
    firstName: [
        { required: true, message: 'First Name is required' },
        { min: 2, message: 'First Name must be at least 2 characters' }
    ],
    lastName: [
        { required: true, message: 'Last Name is required' },
        { min: 2, message: 'Last Name must be at least 2 characters' }
    ],
    gender: [
        { required: true, message: 'Gender is required' }
    ],
    role: [
        { required: true, message: 'Role is required' }
    ],
    phone: [
        { required: true, message: 'Phone number is required' },
        { pattern: /^[0-9]{10}$/, message: 'Phone number must be 10 digits' }
    ],
    email: [
        { required: true, message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email address' }
    ],
    DOB: [
        { required: true, message: 'Date of Birth is required' }
    ],
    address: [
        { required: true, message: 'Address is required' },
        { min: 3, message: 'Address must be at least 3 characters' }
    ]
};

export const clientFormRules = {
    clientName: [
        { required: true, message: "Please input the client's name!" },
    ],
    industry: [
        { required: true, message: "Please select an industry!" },
    ],
    subIndustry: [
        { required: true, message: "Please select a sub-industry!" },
    ],
    offering: [
        { required: true, message: "Please describe what they offer!" },
    ],
    territory: [
        { required: true, message: "Please select a territory!" },
    ],
    incorporationType: [
        { required: true, message: "Please select an incorporation type!" },
    ],
    clientStatus: [
        { required: true, message: "Please select the client status!" },
    ],
    marketCap: [
        { required: true, message: "Please input the market cap!" },
    ],
    annualRevenue: [
        { required: true, message: "Please input the annual revenue!" },
    ],
    classification: [
        { required: true, message: "Please select a classification!" },
    ],
    totalEmployeeStrength: [
        { required: true, message: "Please input the total employee strength!" },
        // { type: "number", min: 0, message: "Employee strength must be greater than 0!" },
    ],
    itEmployeeStrength: [
        { required: true, message: "Please input the IT employee strength!" },
        // { type: "number", min: 0, message: "IT employee strength must be greater than 0!" },
    ],
    primaryRelationship: [
        { required: true, message: "Please select a primary relationship!" },
    ],
    secondaryRelationship: [
        { required: true, message: "Please select a secondary relationship!" },
    ],
    relationshipStatus: [
        { required: true, message: "Please select a relationship status!" },
    ],
    relatedContacts: [
        { required: true, message: "Please select related contacts!" },
    ],
    priority: [
        { required: true, message: "Please select a priority level!" },
    ],
};

export const contactFormRules = {
    firstName: [
        { required: true, message: "First Name is required" },
        { min: 2, message: "First Name must be at least 2 characters" },
    ],
    lastName: [
        { required: true, message: "Last Name is required" },
        { min: 2, message: "Last Name must be at least 2 characters" },
    ],
    gender: [{ required: true, message: "Gender is required" }],
    clientName: [{ required: true, message: "Client Name is required" }],
    jobTitle: [{ required: true, message: "Job Title is required" }],
    phone: [
        { required: true, message: "Phone number is required" },
        { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
    ],
    mobilePhone: [
        { required: true, message: "Mobile Phone is required" },
        { pattern: /^[0-9]{10}$/, message: "Mobile Phone must be 10 digits" },
    ],
    workEmail: [
        { required: true, message: "Work Email is required" },
        { type: "email", message: "Please enter a valid email address" },
    ],
    personalEmail: [
        { required: true, message: "Personal Email is required" },
        { type: "email", message: "Please enter a valid email address" },
    ],
    archType: [{ required: true, message: "Arch Type is required" }],
    relationshipDegree: [
        { required: true, message: "Relationship Degree is required" },
    ],
    city: [{ required: true, message: "City is required" }],
    memorableInfo: [
        { required: true, message: "This field is required" },
        { min: 3, message: "Must be at least 3 characters" },
    ],
};

export const opportunityFormRules = {
    clientName: [{ required: true, message: "Client Name is required" }],
    partneredWith: [{ required: true, message: "Partnered With is required" }],
    projectName: [{ required: true, message: "Project Name is required" }],
    associatedTender: [{ required: true, message: "Associated Tender is required" }],
    solution: [{ required: true, message: "Solution is required" }],
    subSolution: [{ required: true, message: "Sub Solution is required" }],
    salesChamp: [{ required: true, message: "Sales Champ is required" }],
    salesStage: [{ required: true, message: "Sales Stage is required" }],
    salesSubStage: [{ required: true, message: "Sales Sub Stage is required" }],
    stageClarification: [{ required: true, message: "Stage Clarification is required" }],
    salesTopLine: [{ required: true, message: "Sales Top-Line is required" }],
    offsets: [{ required: true, message: "Offsets are required" }],
    address: [{ required: true, message: "Address is required" }],
};

export const tenderFormRules = {
    rfpDate: [
        { required: true, message: "RFP Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
    submissionDueDate: [
        { required: true, message: "Submission Due Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
    clientName: [{ required: true, message: "Client Name is required" }],
    reference: [{ required: true, message: "Reference is required" }],
    rfpTitle: [{ required: true, message: "RFP Title is required" }],
    rfpSource: [{ required: true, message: "RFP Source is required" }],
    associatedOpportunity: [
        { required: true, message: "Associated Opportunity is required" },
    ],
    bond: [{ required: true, message: "Bond selection is required" }],
    bondValue: [{ required: true, message: "Bond Value is required" }],
    bondIssueDate: [
        { required: true, message: "Bond Issue Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
    bondValidUntil: [
        { required: true, message: "Bond Valid Until Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
    submissionMode: [
        { required: true, message: "Submission Mode is required" },
    ],
    evaluationDate: [
        { required: true, message: "Evaluation Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
    tenderOfficer: [{ required: true, message: "Tender Officer is required" }],
    bidManager: [{ required: true, message: "Bid Manager is required" }],
    tenderStage: [{ required: true, message: "Tender Stage is required" }],
    stageExplanation: [
        { required: true, message: "Stage Explanation is required" },
    ],
    submissionDate: [
        { required: true, message: "Submission Date is required" },
        { type: "date", message: "Please enter a valid date" },
    ],
};

export const registrationFormRules = {
    clientName: [{ required: true, message: "Client Name is required" }],
    registrationChamp: [{ required: true, message: "Registration Champ is required" }],
    registrationStatus: [{ required: true, message: "Registration Status is required" }],
    role: [{ required: true, message: "Role is required" }],
    registeredUsername: [{ required: true, message: "Registered Username is required" }],
    registeredPassword: [{ required: true, message: "Registered Password is required" }],
    otherDetails: [{ required: false }],
    registeredDate: [{ required: true, message: "Registered Date is required" }],
    validUntil: [{ required: true, message: "Valid Until is required" }],
    primaryRegistrationContact: [{ required: true, message: "Primary Registration Contact is required" }],
    submittedDocuments: [{ required: false }],
    notes: [{ required: false }],
};

export const businessDevelopmentFormRules = {
    client: [
        { required: false, message: "Client is required." },
    ],
    entryDate: [
        { required: true, message: "Entry date is required." },
    ],
    enteredBy: [
        { required: true, message: "Entered by is required." },
    ],
    contact: [
        { required: false, message: "Contact is required." },
    ],
    connectionSource: [
        { required: true, message: "Connection source is required." },
        { max: 255, message: "Connection source cannot exceed 255 characters." },
    ],
    potentialProject: [
        { required: true, message: "Potential project is required." },
        { max: 255, message: "Potential project cannot exceed 255 characters." },
    ],
    solution: [
        { required: true, message: "Solution is required." },
    ],
    subSolution: [
        { required: false, message: "Sub Solution is required." },
    ],
    industry: [
        { required: true, message: "Industry is required." },
    ],
    territory: [
        { required: true, message: "Territory is required." },
    ],
    salesChamp: [
        { required: true, message: "Sales Champ is required." },
    ],
    potentialTopLine: [
        { required: true, message: "Potential TopLine is required." },
        { min: 0, message: "Potential TopLine must be a positive number." },
    ],
    potentialOffset: [
        { required: true, message: "Potential Offsets is required." },
        { min: 0, message: "Potential Offsets must be a positive number." },
    ],
    Notes: [
        { required: false, message: "Notes is required." },
    ],
};

