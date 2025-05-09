// function Employee(id, name, performanceMetrics, feedback) {
//     this.id = id;
//     this.name = name;
//     this.performanceMetrics = performanceMetrics;
//     this.feedback = feedback;
//   }
  
//   // Prototype method to calculate average score
//   Employee.prototype.getAverageScore = function () {
//     const scores = Object.values(this.performanceMetrics);
//     const total = scores.reduce((sum, score) => sum + score, 0);
//     return scores.length ? (total / scores.length).toFixed(2) : 0;
//   };
  
//   // Prototype method to classify performance level
//   Employee.prototype.getPerformanceLevel = function () {
//     const avg = parseFloat(this.getAverageScore());
//     if (avg >= 9) return "Outstanding";
//     else if (avg >= 7) return "Exceeds Expectations";
//     else if (avg >= 5) return "Meets Expectations";
//     else return "Needs Improvement";
//   };
  
//   // Prototype method to add feedback conditionally
//   // Employee.prototype.addFeedback = function (comment) {
//   //   if (typeof comment === "string" && comment.trim().length > 0) {
//   //     this.feedback.push(comment.trim());
//   //   }
//   // };
  
//   // Example usage
//   const emp = new Employee(1, "John Doe", {
//     communication: 7,
//     efficiency: 8,
//     reliability: 9
//   });
  
//   console.log("Average Score:", emp.getAverageScore());             
//   console.log("Performance Level:", emp.getPerformanceLevel());      
  
//   // emp.addFeedback("Consistently meets deadlines.");
//   emp.addFeedback(" ");
//   console.log("Feedback:", emp.feedback);                           
  

  
  
function Order(customer, items, status) {
  this.customer = customer; // { name: '...', email: '...' }
  this.items = items;       // [ { productName: '...', quantity: X, unitPrice: Y }, ... ]
  this.status = status;     // e.g., 'pending', 'paid', 'shipped'
}

Order.prototype = {
  computeTotal: function() {
      return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  },

  updateStatus: function(isPaid) {
      this.status = isPaid ? 'paid' : 'pending';
  },

  categorizeUrgency: function() {
      switch (this.status) {
          case 'paid':
              return this.computeTotal() > 1000 ? 'High Priority' : 'Medium Priority';
          case 'pending':
              return 'Low Priority';
          case 'shipped':
              return 'Completed';
          default:
              return 'Unknown';
      }
  }
};

// Example usage:
const order = new Order(
  { name: "Alice", email: "alice@example.com" },
  [
      { productName: "Laptop", quantity: 1, unitPrice: 1200 },
      { productName: "Mouse", quantity: 2, unitPrice: 25 }
  ],
  'pending'
);

console.log("Total:", order.computeTotal()); // 1250
order.updateStatus(true);
console.log("Status:", order.status); // 'paid'
console.log("Urgency:", order.categorizeUrgency()); // 'High Priority
