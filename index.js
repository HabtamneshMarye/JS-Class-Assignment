function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  
  // Prototype method to calculate average score
  Employee.prototype.getAverageScore = function () {
    const scores = Object.values(this.performanceMetrics);
    const total = scores.reduce((sum, score) => sum + score, 0);
    return scores.length ? (total / scores.length).toFixed(2) : 0;
  };
  
  // Prototype method to classify performance level
  Employee.prototype.getPerformanceLevel = function () {
    const avg = parseFloat(this.getAverageScore());
    if (avg >= 9) return "Outstanding";
    else if (avg >= 7) return "Exceeds Expectations";
    else if (avg >= 5) return "Meets Expectations";
    else return "Needs Improvement";
  };
  
  // Prototype method to add feedback conditionally
  // Employee.prototype.addFeedback = function (comment) {
  //   if (typeof comment === "string" && comment.trim().length > 0) {
  //     this.feedback.push(comment.trim());
  //   }
  // };
  
  // Example usage
  const emp = new Employee(1, "John Doe", {
    communication: 7,
    efficiency: 8,
    reliability: 9
  });
  
  console.log("Average Score:", emp.getAverageScore());             
  console.log("Performance Level:", emp.getPerformanceLevel());      
  
  emp.addFeedback("Consistently meets deadlines.");
  emp.addFeedback(" ");
  console.log("Feedback:", emp.feedback);                           
  