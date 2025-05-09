//Question 3
function Order(customer, items, status) {
  this.customer = customer; 
  this.items = items;      
  this.status = status;    
}

Order.prototype = {
  computeTotalCost: function() {
      return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  },

  updateStatus: function(isPaid) {
      this.status = isPaid ? 'paid' : 'pending';
  },

  categorizeUrgency: function() {
      switch (this.status) {
          case 'paid':
              return this.computeTotalCost() > 1000 ? 'High Priority' : 'Medium Priority';
          case 'pending':
              return 'Low Priority';
          case 'shipped':
              return 'Completed';
          default:
              return 'Unknown';
      }
  }
};

const orders = new Order(
  { name: "Alice", email: "alice@example.com" },
  [
      { productName: "Laptop", quantity: 1, unitPrice: 1200 },
      { productName: "Mouse", quantity: 2, unitPrice: 25 }
  ],
  'pending'
);

console.log("Total:", orders.computeTotalCost()); 
orders.updateStatus(true);
console.log("Status:", orders.status);
console.log("Urgency:", orders.categorizeUrgency()); 

// Question 4

function Employee(id, name, performanceMetrics, feedback = []) {
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
    const average = parseFloat(this.getAverageScore());
    if (average >= 9) return "Outstanding";
    else if (average >= 7) return "Exceeds Expectations";
    else if (average >= 5) return "Meets Expectations";
    else return "Needs Improvement";
  };
  
  // Prototype method to add feedback conditionally
  Employee.prototype.addFeedback = function (comment) {
    if (typeof comment === "string" && comment.trim().length > 0) {
      this.feedback.push(comment.trim());
    }
  };
  

  const emplo = new Employee(1, "John Doe", {
    communication: 7,
    efficiency: 8,
    reliability: 9
  });
  
  console.log("Avg Score:", emplo.getAverageScore());              
  console.log("Performance Level:", emplo.getPerformanceLevel());     
  
  emplo.addFeedback("Consistently meets deadlines.");
  emplo.addFeedback(" ");
  console.log("Feedback:", emplo.feedback);           
  