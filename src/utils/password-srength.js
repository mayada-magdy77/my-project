export function checkPasswordStrength(password) {
    let strength = 0;
    let feedback = { text: "", background: "", width: "" }
    if (password.length > 8) strength++;
    if (password.length > 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%&^*()]/.test(password)) strength++;

    switch (strength) {
        case 1:
            feedback.text = "very week";
            feedback.background = "bg-red-500";
            feedback.width = "w-1/6";
            break;
        case 2:
            feedback.text = "week";
            feedback.background = "bg-orange-500";
            feedback.width = "w-2/6";
            break;
        case 3:
            feedback.text = "fair";
            feedback.background = "bg-yellow-500";
            feedback.width = "w-3/6";
            break;
        case 4:
            feedback.text = "good";
            feedback.background = "bg-lime-500";
            feedback.width = "w-4/6";
            break;
        case 5:
            feedback.text = "strong";
            feedback.background = "bg-primary-500";
            feedback.width = "w-5/6";
            break;
        case 6:
            feedback.text = "very strong";
            feedback.background = "bg-primary-700";
            feedback.width = "w-full";
            break;
        
    }
    return feedback;
}